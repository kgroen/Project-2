var GAME_LEVELS = [
  ["                                                                                       ",
   "                                                                                       ",
   "                                                                                       ",
   "                                                                                       ",
   "                                                                                       ",
   "                                                                                       ",
   "                                                                                       ",
   "                                               xx                                   x  ",
   "                                    o o                                             x  ",
   "                                   xxxxxxx                                          x  ",
   "                                   x                                            o   x  ",
   "                                   x                 xx                        xx   x  ",
   "  xx                               x      o o                                  x    x  ",
   "  x                     o    xxxxxxx                                       x   x    x  ",
   "  x                          x               xx                          xxxxxxxxxxxx  ",
   "  x                     o    x   y                                                  x  ",
   "  x  @                       x                p                                   w x  ",
   "  xxxxxxxxxxxx    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxx    xxxxxxxxxxxxxxxx  ",
   "             x    x                              x     x        x!!!!x                 ",
   "             x!!!!x                              x!!!!!x        x!!!!x                 ",
   "             x!!!!x                              x!!!!!x        xxxxxx                 ",
   "             xxxxxx                              xxxxxxx                               ",
   "                                                                                       ",
   "                                                                                       "],
  ["                                                                                                        ",
   "                                                                                                        ",
   "                                                                                                        ",
   "                                                                                                        ",
   "                                                                                                        ",
   "                                                                                                        ",
   "                                           p                                                            ",
   "                                       xxxxxxxxx                                                        ",
   "                                       x       x                                                        ",
   "           y                           x       x                                                        ",
   "         xxxxxxx                      xx       x                                                        ",
   "                                       x       x                                                        ",
   "                                       x       x                                                        ",
   "                                       x       x                                                        ",
   "                                       x       x                                                        ",
   "                   xxxx               xx       x                                                        ",
   "                                     x x       x     xxx                                     xxx        ",
   "                                       x       x     x x                                     x x        ",
   "                                       x       x!!!!!x x                                     x          ",
   "            xxx            xxxxxx      x       x!!!!!x x                                     x          ",
   "                           x    x      x       x!!!!!x x                                     x          ",
   "                           x    x      x       xxxxxxx x                                     x          ",
   "       @                   x    x    o x               x                                  ow x          ",
   "      xxx               xxxx    x   xxxx               xxx                            xxxxxxxx          ",
   "      x x               x       x      x                 x                            x                 ",
   "      x x          o p  x       x      x                 x                            x                 ",
   "x     x x          xxx  x       x!!!!!!x                 x                       xxxxxx                 ",
   "x     x x               x       x!!!!!!x                 xxxx              o     x                      ",
   "x     x x!!!!!!!!!!!!!!!x       x!!!!!!x                    x                    x                      ",
   "x     x x!!!!!!!!!!!!!!!x       xxxxxxxx                    x         xxxxxxxxxxxx                      ",
   "x     x x!!!!!!!!!!!!!!!x                                   x         x                                 ",
   "xxxxxxx x!!!!!!!!!!!!!!!x                                   x         x                                 ",
   "         x!!!!!!!!!!!!!x                                    x o       x                                 ",
   "          xxxxxxxxxxxxx                                     xxxxxxxxxxx                                 ",
   "                                                                                                        "],
  ["                                                                                                               ",
   "                                                                                                               ",
   "                                                                                                               ",
   "                                                                                                               ",
   "                                                                                                               ",
   "                                                                                                               ",
   "                                                                                                               ",
   "                                                                                                               ",
   "                                                                                                               ",
   "                                                                                                               ",
   "                                                                                                               ",
   "                                                                                                               ",
   "                                                                                                               ",
   "                                                                  o                                            ",
   "                                                                                                               ",
   "                                                                 xxx                                           ",
   "                                   xxxxxxxx                      x x                                           ",
   "                                          x                      x x     p  o                                  ",
   "                                          x                      x x    xxxxxx                                 ",
   "                             o            x           xxxxxx    xx x                                           ",
   "                           xxxx           x           x    x     x x                                           ",
   "                                          x           x    x     x x                                           ",
   "                                           x         ox    x     x xxxxxxxx                                    ",
   "                                            xxxxxxxxxxx    x     x        x                                    ",
   "                                   xxxx                    xx    x        x       xxxxxx                       ",
   "                                                           x     x        x!!!!!!!x    x                       ",
   "                                                           x     x        x!!!!!!!x    x                       ",
   "                                                           x     x        x!!!!!!!x    x                       ",
   "                           xxxx                            x     x        xxxxxxxxx    x      xxx              ",
   "                                                           x    xx                      x       x              ",
   "                                                           x     x                       x   ow x              ",
   "                                                           x     x                        xxxxxxx              ",
   "               xxxxxxx             xxxxx                   x     x                                             ",
   "  xxx        xx      x                                     x     x                                             ",
   "  x                  x                                     xx    x                                             ",
   "  x                   x       xxxx                         x     x                                             ",
   "  x    @              x                                    x     x                                             ",
   "  xxxxxxxx             x                                   x     x                                             ",
   "         x             x        xxxxx                      x     x                                             ",
   "         x!!!!!!!!!!!!!!x      x!!!!!!!!!!!!!!!!!!!!!!!!!!!x    xx                                             ",
   "         x!!!!!!!!!!!!!!!xxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!x     x                                             ",
   "         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x     x                                             ",
   "         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     x                                             ",
   "                                                           x     x                                             ",
   "                                                           x  y  x                                             ",
   "                                                           xxxxxxx                                             ",
   "                                                                                                               "],
   ["                                                                        ",
    "                                                                        ",
    "  y  x     x  xxxxxx  x    x            y                               ",
    "  y   x   x   x    x  x    x            y                               ",
    "  y    x x    x    x  x    x            y                               ",
    "  y     x     x    x  x    x            y                               ",
    "  y     x     x    x  x    x            y                               ",
    "  y     x     x    x  x    x            y                               ",
    "  y     x     xxxxxx  xxxxxx            y                               ",
    "  y                                     y                               ",
    "  y    x         x  xxxxx  x     x   x  y                               ",
    "  y    x         x    x    xx    x   x  y                               ",
    "  y    x         x    x    x x   x   x  y                               ",
    "  y     x   x   x     x    x  x  x   x  y                               ",
    "  y     x  x x  x     x    x   x x   x  y                               ",
    "  y     x  x x  x     x    x    xx      y                               ",
    "  y     xxx   xxx   xxxxx  x     x   x  y                               ",
    "                                                                        ",
    "                                                                        ",
    "                                                                        ",
    "                                                                        ",]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
