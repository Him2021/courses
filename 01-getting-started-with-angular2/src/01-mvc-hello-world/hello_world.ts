
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";

@Component({
    selector:'hello-world',
    template: `<h1>Hello World !</h1>`
})
export class HelloWorld {



}

bootstrap(HelloWorld);