import 'package:flutter/material.dart';


class WelcomePage extends StatefulWidget {
  const WelcomePage();

  @override
  _WelcomePageState createState() => _WelcomePageState();
}

class _WelcomePageState extends State<WelcomePage> {
  List<Task> todoList = [];
  List<Task> filteredList = [];

  @override
  void initState() {
    super.initState();
    // Inicializar la lista de tareas
    todoList = [
      Task(
        title: 'Tarea 1',
        isCompleted: false,
        date: DateTime.now(),
        description: 'Descripción de la tarea 1',
        deadline: DateTime.now().add(Duration(days: 7)),
        pomodoro: 0,
        priority: Priority.medium,
        tags: ['Tag1', 'Tag2'],
        status: TaskStatus.pending,
      ),
      Task(
        title: 'Tarea 2',
        isCompleted: false,
        date: DateTime.now(),
        description: 'Descripción de la tarea 2',
        deadline: DateTime.now().add(Duration(days: 3)),
        pomodoro: 0,
        priority: Priority.low,
        tags: ['Tag2', 'Tag3'],
        status: TaskStatus.inProgress,
      ),
      Task(
        title: 'Tarea 3',
        isCompleted: true,
        date: DateTime.now(),
        description: 'Descripción de la tarea 3',
        deadline: DateTime.now().add(Duration(days: 5)),
        pomodoro: 1,
        priority: Priority.high,
        tags: ['Tag1'],
        status: TaskStatus.completed,
      ),
    ];
    filteredList = todoList;
  }

  void filterTasks(String keyword) {
    setState(() {
      filteredList = todoList
          .where((task) =>
          task.title.toLowerCase().contains(keyword.toLowerCase()))
          .toList();
    });
  }

  void toggleTaskCompletion(int index) {
    setState(() {
      final task = filteredList[index];
      task.isCompleted = !task.isCompleted;
      if (task.isCompleted) {
        task.status = TaskStatus.completed;
      } else {
        task.status = TaskStatus.inProgress;
      }
    });
  }

  void deleteTask(int index) {
    setState(() {
      todoList.removeAt(index);
      filteredList = todoList;
    });
  }

  void addNewTask(Task task) {
    setState(() {
      task.isCompleted = task.status == TaskStatus.completed;
      todoList.add(task);
      filteredList = todoList;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('TaskLister'),
          actions: [
            IconButton(
              icon: Icon(Icons.person),
              onPressed: () {
                // Acción al presionar el botón de usuario
              },
            ),
            IconButton(
              icon: Icon(Icons.menu),
              onPressed: () {
                // Acción al presionar el botón de opciones
              },
            ),
          ],
        ),
        body: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: TextField(
                decoration: InputDecoration(
                  labelText: 'Buscar',
                  prefixIcon: Icon(Icons.search),
                  border: OutlineInputBorder(),
                ),
                onChanged: (value) {
                  filterTasks(value);
                },
              ),
            ),
            Expanded(
              child: ListView.builder(
                itemCount: filteredList.length,
                itemBuilder: (context, index) {
                  final task = filteredList[index];
                  return ListTile(
                    leading: IconButton(
                      icon: task.isCompleted
                          ? Icon(Icons.check_box)
                          : Icon(Icons.check_box_outline_blank),
                      onPressed: () {
                        toggleTaskCompletion(index);
                      },
                    ),
                    title: Text(
                      task.title,
                      style: TextStyle(
                        decoration: task.isCompleted
                            ? TextDecoration.lineThrough
                            : TextDecoration.none,
                        color:
                        task.isCompleted ? Colors.grey[600] : Colors.black,
                      ),
                    ),
                    subtitle: Text(
                      'Prioridad: ${priorityToString(task.priority)}',
                    ),
                    trailing: IconButton(
                      icon: Icon(Icons.delete),
                      color: Colors.red,
                      onPressed: () {
                        deleteTask(index);
                      },
                    ),
                  );
                },
              ),
            ),
          ],
        ),
        floatingActionButton: FloatingActionButton(
          child: Icon(Icons.add),
          onPressed: () {
            showDialog(
              context: context,
              builder: (BuildContext context) {
                final newTask = Task(
                  title: '',
                  isCompleted: false,
                  date: DateTime.now(),
                  description: '',
                  deadline: DateTime.now().add(Duration(days: 1)),
                  pomodoro: 0,
                  priority: Priority.low,
                  tags: [],
                  status: TaskStatus.pending,
                );
                return StatefulBuilder(
                  builder: (BuildContext context, StateSetter setState) {
                    return AlertDialog(
                      title: Text('Nueva tarea'),
                      content: SingleChildScrollView(
                        child: Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            TextField(
                              decoration: InputDecoration(labelText: 'Título'),
                              onChanged: (value) {
                                setState(() {
                                  newTask.title = value;
                                });
                              },
                            ),
                            SizedBox(height: 16),
                            DropdownButtonFormField<Priority>(
                              value: newTask.priority,
                              onChanged: (value) {
                                setState(() {
                                  newTask.priority = value!;
                                });
                              },
                              items: Priority.values.map((priority) {
                                return DropdownMenuItem<Priority>(
                                  value: priority,
                                  child: Text(priorityToString(priority)),
                                );
                              }).toList(),
                              decoration: InputDecoration(
                                labelText: 'Prioridad',
                              ),
                            ),
                            SizedBox(height: 16),
                            DropdownButtonFormField<TaskStatus>(
                              value: newTask.status,
                              onChanged: (value) {
                                setState(() {
                                  newTask.status = value!;
                                });
                              },
                              items: TaskStatus.values.map((status) {
                                return DropdownMenuItem<TaskStatus>(
                                  value: status,
                                  child: Text(taskStatusToString(status)),
                                );
                              }).toList(),
                              decoration: InputDecoration(
                                labelText: 'Estado',
                              ),
                            ),
                          ],
                        ),
                      ),
                      actions: [
                        TextButton(
                          child: Text('Cancelar'),
                          onPressed: () {
                            Navigator.of(context).pop();
                          },
                        ),
                        TextButton(
                          child: Text('Ingresar'),
                          onPressed: () {
                            addNewTask(newTask);
                            Navigator.of(context).pop();
                          },
                        ),
                      ],
                    );
                  },
                );
              },
            );
          },
        ),
      ),
    );
  }
}

enum Priority { low, medium, high }
enum TaskStatus { pending, inProgress, completed }

class Task {
  String title;
  bool isCompleted;
  DateTime date;
  String description;
  DateTime deadline;
  int pomodoro;
  Priority priority;
  List<String> tags;
  TaskStatus status;

  Task({
    required this.title,
    required this.isCompleted,
    required this.date,
    required this.description,
    required this.deadline,
    required this.pomodoro,
    required this.priority,
    required this.tags,
    required this.status,
  });
}

String priorityToString(Priority priority) {
  switch (priority) {
    case Priority.low:
      return 'Baja';
    case Priority.medium:
      return 'Media';
    case Priority.high:
      return 'Alta';
    default:
      return '';
  }
}

String taskStatusToString(TaskStatus status) {
  switch (status) {
    case TaskStatus.pending:
      return 'Pendiente';
    case TaskStatus.inProgress:
      return 'En progreso';
    case TaskStatus.completed:
      return 'Completada';
    default:
      return '';
  }
}
