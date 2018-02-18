/**
 *    Copyright 2018 Panjie Setiawan Wicaksono
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import { ColorHelper, rgba, white } from 'csx';

function powerNumber(num: number, exp: number): number {
  let value = 1;
  if (exp > 0) {
    for (let i = 1; i <= exp; i++) {
      value = value * num;
    }
  } else if (exp < 0) {
    for (let i = 1; i <= -exp; i++) {
      value = value / num;
    }
  }
  return value;
}

function colorLuminance(color: ColorHelper): number {
  let colorRgb = {
    red: color.red(),
    // tslint:disable-next-line:object-literal-sort-keys
    green: color.green(),
    blue: color.blue(),
  };
  for (const name in colorRgb) {
    if (colorRgb.hasOwnProperty(name)) {
      let value = colorRgb[name] / 255;
      if (value < 0.03928) {
        value = value / 12.92;
      } else {
        value = (value + 0.055) / 1.055;
        value = powerNumber(value, 2);
      }
      colorRgb = {
        ...colorRgb,
        [name]: value,
      };
    }
  }
  return (
    colorRgb.red * 0.2126 + colorRgb.green * 0.7152 + colorRgb.blue * 0.0722
  );
}

function findColorInvert(color: ColorHelper): ColorHelper {
  if (colorLuminance(color) > 0.55) {
    return rgba(0, 0, 0, 0.7);
  }
  return white;
}

export { powerNumber, colorLuminance, findColorInvert };