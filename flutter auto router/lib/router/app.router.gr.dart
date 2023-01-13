// **************************************************************************
// AutoRouteGenerator
// **************************************************************************

// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// AutoRouteGenerator
// **************************************************************************
//
// ignore_for_file: type=lint

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:auto_route/auto_route.dart' as _i3;
import 'package:flutter/cupertino.dart' as _i5;
import 'package:flutter/material.dart' as _i4;

import '../View/HomeDetailView.dart' as _i2;
import '../View/HomeView.dart' as _i1;

class AppRouter extends _i3.RootStackRouter {
  AppRouter([_i4.GlobalKey<_i4.NavigatorState>? navigatorKey])
      : super(navigatorKey);

  @override
  final Map<String, _i3.PageFactory> pagesMap = {
    HomeView.name: (routeData) {
      return _i3.MaterialPageX<dynamic>(
        routeData: routeData,
        child: const _i1.HomeView(),
      );
    },
    HomeDetailView.name: (routeData) {
      final pathParams = routeData.inheritedPathParams;
      final args = routeData.argsAs<HomeDetailViewArgs>(
          orElse: () => HomeDetailViewArgs(id: pathParams.getInt('id')));
      return _i3.MaterialPageX<dynamic>(
        routeData: routeData,
        child: _i2.HomeDetailView(
          key: args.key,
          id: args.id,
        ),
      );
    },
  };

  @override
  List<_i3.RouteConfig> get routes => [
        _i3.RouteConfig(
          HomeView.name,
          path: '/',
        ),
        _i3.RouteConfig(
          HomeDetailView.name,
          path: '/detail/:id',
        ),
      ];
}

/// generated route for
/// [_i1.HomeView]
class HomeView extends _i3.PageRouteInfo<void> {
  const HomeView()
      : super(
          HomeView.name,
          path: '/',
        );

  static const String name = 'HomeView';
}

/// generated route for
/// [_i2.HomeDetailView]
class HomeDetailView extends _i3.PageRouteInfo<HomeDetailViewArgs> {
  HomeDetailView({
    _i5.Key? key,
    required int id,
  }) : super(
          HomeDetailView.name,
          path: '/detail/:id',
          args: HomeDetailViewArgs(
            key: key,
            id: id,
          ),
          rawPathParams: {'id': id},
        );

  static const String name = 'HomeDetailView';
}

class HomeDetailViewArgs {
  const HomeDetailViewArgs({
    this.key,
    required this.id,
  });

  final _i5.Key? key;

  final int id;

  @override
  String toString() {
    return 'HomeDetailViewArgs{key: $key, id: $id}';
  }
}
