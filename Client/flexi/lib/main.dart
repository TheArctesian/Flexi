import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text('CIS Flexi'),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () => FirebaseFirestore.instance
              .collection('tests')
              .add({'timestamp': Timestamp.fromDate(DateTime.now())}),
          child: Icon(Icons.add),
        ),
        body: StreamBuilder(
          stream: FirebaseFirestore.instance.collection('tests').snapshots(),
          builder: (
            BuildContext context,
            AsyncSnapshot<QuerySnapshot> snapshot,
          )
          { 
            if (!snapshot.hasData)
              return const Text('No data');
            if (snapshot.hasError)
              return Text('Error: ${snapshot.error}');

              return ListView(
                children: snapshot.data!.docs.map((DocumentSnapshot document) {
                  Map<String, dynamic> data = document.data()! as Map<String, dynamic>;
                  return ListTile(
                    title: Text(data['timestamp'].toDate().toString()),
                  );
                }).toList(),
              );
          }
        )
      )
    );

  }
  }
