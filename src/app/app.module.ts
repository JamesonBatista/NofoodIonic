import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { Network } from '@ionic-native/network/ngx';
import { OneSignal } from '@ionic-native/onesignal';

import { MyApp } from './app.component';
import { SpinnerProvider } from '../providers/spinner/spinner';
import { AlertProvider } from '../providers/alert/alert';
import { HttpProvider } from '../providers/http/http';
import { NetworkProvider } from '../providers/network/network';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { CategoriaProvider } from '../providers/categoria/categoria';
import { CameraProvider } from '../providers/camera/camera';
import { ProdutoProvider } from '../providers/produto/produto';
import { CarrinhoProvider } from '../providers/carrinho/carrinho';
import { PedidoProvider } from '../providers/pedido/pedido';
import {OrderModule} from 'ngx-order-pipe'

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SpinnerProvider,
    AlertProvider,
    HttpProvider,
    NetworkProvider,
    UsuarioProvider,
    CategoriaProvider,
    CameraProvider,
    Camera,
    OneSignal,
    Network,
    ProdutoProvider,
    CarrinhoProvider,
    PedidoProvider,
    OrderModule,
  ]
})
export class AppModule { }
