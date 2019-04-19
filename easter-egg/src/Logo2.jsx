import React from "react";
import Snap from "snapsvg-cjs";
import "./Logo2.css";

class Logo2 extends React.Component {
  componentDidMount() {
    let s_oeuf = Snap("#svg" + this.props.idKey.toString()),
      head = s_oeuf.circle(87, 95, 78),
      eyes_l = s_oeuf.circle(65, 90, 15),
      retine_l = s_oeuf.circle(65, 90, 10),
      eyes_r = s_oeuf.circle(110, 90, 20),
      retine_r = s_oeuf.circle(110, 90, 10),
      bec = s_oeuf.polygon(80, 95, 89, 108, 95, 95),
      oeuf_top = s_oeuf.path(
        "M85.616,0C37.844,0,0,81.46,0,129.234l20-20l20,20l20-20l20,20l20.001-20l20,20l20-20l20,20l10.926-13.534 C170.927,67.925,133.388,0,85.616,0z"
      ),
      oeuf_bottom = s_oeuf.path(
        "M171.25,118.154c-0.007-0.839-0.028-1.676-0.051-2.513l-0.119-0.876l-0.152-0.65l-10.773,14.184l-20-20 l-20,20l-20-20l-20.001,20l-20-20l-20,20l-20-20l-20,20L0,128.883c0,47.773,38.728,86.501,86.5,86.501 c41.939,0,76.899-29.852,84.813-69.465c-0.105-0.639-0.085-1.338,0.099-2.091C173.414,135.662,171.324,126.476,171.25,118.154z"
      ),
      line = s_oeuf.path(
        "M 1,129 l 20, -20 l 20,20 l 20, -20 l 20,20 l 20, -20 l 20,20 l 20, -20 l 20,20 l 10,-11"
      );
    oeuf_top
      .attr({
        fill: "#ffa2f0",
        cursor: "pointer"
      })
      .click(animate);
    oeuf_bottom
      .attr({
        fill: "#a2ffd0",
        cursor: "pointer"
      })
      .dblclick(open);
    line.attr({
      fill: "none",
      stroke: "#fff",
      strokeDashoffset: 250,
      strokeDasharray: 250
    });
    // let stop = 0,
    //   start = 250;
    function animate() {
      document.querySelector("#svg1").style.animationPlayState = "paused";
      //   Snap.animate(start, stop, function(value) {
      //     line.attr({
      //       "stroke-dashoffset": value
      //     });
      //   });
    }
    function open() {
      line.attr({
        stroke: "none",
        fill: "blue"
      });
      /* TweenMax.to($("path:first-of-type"), 0.5, {
        y: -50
      });*/
      /*document.querySelector("#svg1").css({
        "animation-play-state": "paused"
      });*/
      document.querySelector("#svg1").style.opacity = "0";
    }
    // HEAD
    head.attr({
      fill: "#ffbf00",
      "z-index": "-1"
    });
    // EYES
    eyes_l.attr({
      fill: "#ffffff",
      stroke: "#000"
    });
    retine_l.attr({
      fill: "#000"
    });
    eyes_r.attr({
      fill: "#fff",
      stroke: "#000"
    });
    retine_r.attr({
      fill: "#000"
    });
    // bec
    bec.attr({
      fill: "red"
    });
  }
  clickEgg() {
    console.log("Bienvenue");

    let solution = Math.floor(Math.random() * 10) + 1;

    console.log("(La solution est " + solution + ")");

    let essais = 2;

    do {
      let nmbre = prompt(
        "Pour le week-end de Pâques nous offrons la possibilité de recevoir un oeuf rien que pour vous gratuitement. Il suffit de choisir un chiffre entre 1 et 10... Es-tu pret pour avoir un bébé oeuf ? "
      );
      essais--;
      if (nmbre < solution) {
        alert(
          " la nombre secret est plus grand, il te reste" + essais + " essais"
        );
      } else if (nmbre > solution) {
        alert(
          " la nombre secret est plus petit, il te reste" + essais + " essais"
        );
      } else if (nmbre === solution) {
        alert(
          "tu as trouvée le nombre secret !! Félicitations un oeuf offert va être livré chez toi prochainement."
        );
      }

      prompt(
        "Tu as perdu.. Peut-être que la prochaine fois tu gagneras un oeuf, retante ta chance. Tu as trois jours pour adopter ton nouveau oeuf"
      );
    } while (essais > 0);

    alert("la solution est " + solution);
  }
  render() {
    const idKey = "svg" + this.props.idKey.toString();
    return (
      <svg
        onClick={() => {
          this.clickEgg();
        }}
        width="200"
        height="200"
        id={idKey}
        className="egg"
      />
    );
  }
}

export default Logo2;
