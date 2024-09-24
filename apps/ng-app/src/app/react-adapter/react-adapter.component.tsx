import {
  Component,
  OnChanges,
  OnInit,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
  ElementRef,
  AfterViewInit,
} from "@angular/core";

import { render, unmountComponentAtNode } from "react-dom";
import { App } from "@apps/react-app";

@Component({
  selector: "app-react-adapter",
  templateUrl: "./react-adapter.component.html",
  styleUrls: [
    "../../../../../apps/react-app/src/App.css",
    "../../../../../apps/react-app/src/index.css",
  ],
})
export class ReactAdapterComponent implements AfterViewInit, OnDestroy, OnChanges {
  @ViewChild("reactRoot") rootRef!: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.ngRender();
  }

  ngAfterViewInit(): void {
    this.ngRender();
  }

  ngOnDestroy(): void {
    // real app is using < react 18
    unmountComponentAtNode(this.rootRef.nativeElement);
  }

  private ngRender() {
    render(<App></App>, this.rootRef.nativeElement);
  }
}
