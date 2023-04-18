import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  late GoogleMapController mapController;
  final LatLng _center = LatLng(39.94026774501402, 32.861662432551384);
  List<Marker> _markes = [];
  Set<Polygon> _polygons = {};
  List<LatLng> _polycoords = [];

  void _incrementCounter() async {
    //  mapController.animateCamera(cameraUpdate)
    await mapController.getZoomLevel();
    await mapController.getScreenCoordinate(_center);
    //   await mapController.showMarkerInfoWindow(markerId);
    //   await mapController.hideMarkerInfoWindow(markerId)
    //   await mapController.setMapStyle(mapStyle)
    mapController.animateCamera(CameraUpdate.newCameraPosition(CameraPosition(
        zoom: 10, target: LatLng(40.13270125933104, 30.00176511704922))));
  }

  _onMapCreated(GoogleMapController controller) {
    mapController = controller;
    setState(() {
      _markes.addAll([
        Marker(
            markerId: MarkerId("markerankara"),
            draggable: true,
            position: _center,
            infoWindow: InfoWindow(
                title: "Ankara",
                onTap: () {
                  print("info modal tıklanıd");
                },
                snippet: "Burası güzel şehir"),
            onTap: () {
              print("marker tıklandı");
            }),
        Marker(
            markerId: MarkerId("markerbilecik"),
            position: LatLng(40.13270125933104, 30.00176511704922),
            onDrag: (latlng) {
              print(latlng);
            })
      ]);
    });
  }

  @override
  void initState() {
    _polycoords.add(_center);
    _polycoords.add(LatLng(40.13270125933104, 30.00176511704922));
    _polygons.add(
      Polygon(
        zIndex: 100,
        consumeTapEvents: true,
        visible: true,
        geodesic: true,
        strokeWidth: 5,
        strokeColor: Colors.red,
        holes: [
          [_center]
        ],
        points: [
          LatLng(39, 32),
          LatLng(39.5, 32.2),
          LatLng(39.9, 32.5),
          LatLng(39.9, 33.5),

        ],
        fillColor: Colors.red.withOpacity(0.4),
          onTap: (){
            print("tıklandı");
          },
          polygonId: PolygonId('dikkatlibolge')),
    );

    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: GoogleMap(
        onTap: (latLng) {
          print(latLng);
        },
        onLongPress: (latLng) {
          print(latLng);
        },
        myLocationButtonEnabled: true,
        myLocationEnabled: true,
        indoorViewEnabled: true,
        trafficEnabled: true,
        buildingsEnabled: true,
        zoomControlsEnabled: true,
        mapToolbarEnabled: true,
        padding: EdgeInsets.all(100),
        //    minMaxZoomPreference: MinMaxZoomPreference(10,15),
        onCameraMoveStarted: () {
          print("Başladı");
        },
        compassEnabled: true,
        onCameraMove: (cp) {
          // print(cp);
        },
        polygons: _polygons,
        polylines: {
          Polyline(
            polylineId: PolylineId("polyıd"),
            color: Colors.blue,
            onTap: () {
              print("ontap");
            },
            points: _polycoords,
            width: 5,
            jointType: JointType.round,
          )
        },
        markers: Set<Marker>.of(_markes),
        liteModeEnabled: false,
        mapType: MapType.normal,
        initialCameraPosition: CameraPosition(target: _center, zoom: 12),
        onMapCreated: _onMapCreated,
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}
