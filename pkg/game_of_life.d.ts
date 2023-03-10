/* tslint:disable */
/* eslint-disable */
/**
*/
export enum Cell {
  Dead = 0,
  Alive = 1,
}
/**
*/
export class Universe {
  free(): void;
/**
* @returns {number}
*/
  width(): number;
/**
* @returns {number}
*/
  height(): number;
/**
* @returns {number}
*/
  cells(): number;
/**
* @param {number} width
*/
  set_width(width: number): void;
/**
* @param {number} height
*/
  set_height(height: number): void;
/**
*/
  tick(): void;
/**
* @returns {Universe}
*/
  static new(): Universe;
/**
* @returns {string}
*/
  render(): string;
/**
* @param {number} row
* @param {number} column
*/
  toggle_cell(row: number, column: number): void;
/**
* @param {number} row
* @param {number} column
* @param {number} cell_status
*/
  change_cell(row: number, column: number, cell_status: number): void;
/**
*/
  destory(): void;
/**
* @returns {boolean}
*/
  get_system_stable(): boolean;
}
