import { Direction, Lrud } from 'lrud';

export default class SpatialNavigator {
  private lrud: Lrud;
  private isLocked: boolean;

  constructor() {
    this.lrud = new Lrud();
  }

  public registerNode(...params: Parameters<Lrud['registerNode']>) {
    try {
      this.lrud.registerNode(...params);
    } catch (e) {
      console.error(e);
    }
  }

  public unregisterNode(...params: Parameters<Lrud['unregisterNode']>) {
    this.lrud.unregisterNode(...params);
  }

  public async handleKeyDown(direction: Direction) {
    if (this.isLocked) return;
    if (!this.lrud.getRootNode()) return;

    if (direction) this.lrud.handleKeyEvent({ direction }, { forceFocus: true });
  }

  public hasOneNodeFocused() {
    return this.lrud.getCurrentFocusNode() !== undefined;
  }

  public grabFocus(id: string) {
    return this.lrud.assignFocus(id);
  }

  public lock() {
    this.isLocked = true;
  }

  public unlock() {
    this.isLocked = false;
  }
}
