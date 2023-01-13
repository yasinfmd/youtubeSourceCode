import 'package:auto_route/annotations.dart';
import 'package:auto_router/View/HomeDetailView.dart';
import 'package:auto_router/View/HomeView.dart';

@MaterialAutoRouter(
  replaceInRouteName: 'Page,Route',
  routes: <AutoRoute>[
    AutoRoute(page: HomeView, initial: true , path: '/'),
    AutoRoute(page: HomeDetailView , path: '/detail/:id'),
  ],
)
class $AppRouter {}