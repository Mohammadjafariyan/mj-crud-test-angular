import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public saveData(key: string, value: any):void {


    if (!value)
      return ;

    let json=JSON.stringify(value)
    localStorage.setItem(key, json);
  }

  public getData<T>(key: string) {
    let json:string | null= localStorage.getItem(key);

    if (!json)
      return null;

    return JSON.parse(json) as T;
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
