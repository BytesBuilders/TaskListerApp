import 'package:flutter/material.dart';

class SignUpPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Crear cuenta'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              '¡Crea una nueva cuenta!',
              style: TextStyle(fontSize: 24.0),
            ),
            // Aquí puedes agregar los campos y lógica para el registro de cuenta
          ],
        ),
      ),
    );
  }
}
