import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MaskSHelper {
    Masks = { 
      RfcMask: [/[A-Za-z]/, /[AEIOUXaeioux]/, /[A-Za-z]/, /[A-Za-z]/, /\d/, /\d/, /[0-1]/, /\d/, /[0-3]/, /\d/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/],
      CardNumberMask: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
    };
    constructor() {

    }
}