const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const clockSize = 60;
const clockMargin = 0;

const clockGrid = {
  rows: Math.ceil(windowHeight / (clockSize + clockMargin)),
  columns: Math.ceil(windowWidth / (clockSize + clockMargin)),
};

class Clock {
  constructor(size, index, firstHandRotation, secondHandRotation) {
    this.div = document.createElement('div');
    this.size = size;
  }

  appendElement() {
    this.div.classList.add('clock');
    document.body.appendChild(this.div);
    this.div.style.width = `${this.size}px`;
    this.div.style.height = `${this.size}px`;
    this.div.style.margin = `${clockMargin}px`;
  }
}

let letters = [];

for (let i = 0; i < clockGrid.rows; i++) {
  for (let x = 0; x < clockGrid.columns; x++) {
    const clock = new Clock(clockSize);
    clock.appendElement();
  }
}

