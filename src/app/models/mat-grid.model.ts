export interface GridSettingsModel {
  headerTile: Tile;
  dealsListTile: Tile;
  dealFormTile: Tile;
  footerTile: Tile;
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
