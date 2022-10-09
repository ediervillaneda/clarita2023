window.onload = function () {

  const canvas = document.querySelector(".heart");
  if (canvas != null) {

    const a = canvas.getContext('2d');
    const HEIGHT = canvas.height = innerHeight;
    const WIDTH = canvas.width = innerWidth;

    const C = Math.cos;
    const R = Math.random;
    const v = 56;
    const Y = 6.3;



    let e = [];
    let h = [];

    const multi = 3;
    for (let cont = 0; cont <= multi; cont++) {
      for (let i = 0; i < Y; i += (0.2 * (cont + 1))) {
        h.push(hPush(i, multi - cont));
      }
    }

    for (let i = 0; i < v;) {
      let x = R() * WIDTH;
      let y = R() * HEIGHT;
      let H = 80 * (i / v) + Math.random * 100;
      let S = 40 * R() + 60;
      let B = 60 * R() + 20;
      let f = [];
      for (let k = 0; k < v;) f[k++] = {
        x: x,
        y: y,
        X: 0,
        Y: 0,
        R: 1 - k / v + 1,
        S: R() + 1,
        q: ~~(R() * v),
        D: 2 * (i % 2) - 1,
        F: 0.2 * R() + 0.7,
        f: `hsla(${~~H},${~~S}%,${~~B}%,.5)`
      };
      e[i++] = f
    }

    setInterval(() => {
      a.fillStyle = "rgba(0,0,0,.2)";
      a.fillRect(0, 0, WIDTH, HEIGHT);
      for (let i = v; i--;) {
        let f = e[i];
        let u = f[0];
        let q = h[u.q];
        let D = u.x - q[0];
        let E = u.y - q[1];
        let G = Math.sqrt(D * D + E * E);
        10 > G && (0.95 < R() ? u.q = ~~(R() * v) : (0.99 < R() && (u.D *= -1), u.q += u.D, u.q %= v, 0 > u.q && (u.q += v)));
        u.X += -D / G * u.S;
        u.Y += -E / G * u.S;
        u.x += u.X;
        u.y += u.Y;
        path(u);
        u.X *= u.F;
        u.Y *= u.F;
        for (let k = 0; k < v - 1;) {
          T = f[k], N = f[++k], N.x -= 0.7 * (N.x - T.x), N.y -= 0.7 * (N.y - T.y), path(N);
        }
      }
    }, 25);


    function path(d) {
      a.fillStyle = d.f;
      a.beginPath();
      a.arc(d.x, d.y, d.R, 0, Y, 1);
      a.closePath();
      a.fill()
    }

    function hPush(i, m) {
      let wi = WIDTH / 2 + (30 + (60 * m)) * Math.pow(Math.sin(i), 3);
      let he = HEIGHT / 2 + (1 + (4 * m)) * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i));
      return [wi, he];
    }
  }
};
