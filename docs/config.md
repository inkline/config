## Configuration

### `theme[name]`

The config supports multiple themes.
- The `default` theme variables will be generated directly in the `:root` of your page
- Other themes are defined under a `.${themeName}-theme` class, e.g. `.dark-theme`

~~~ts
import { defineConfig } from '@inkline/config';

export default defineConfig({
    theme: {
        default: {
            color: {
                primary: '#178ab0'
            }
        },
        dark: {
            color: {
                primary: '#56aecc'
            }
        }
    }
});
~~~

**Output**:

~~~scss
:root {
    --color-primary-h: 195deg;
    --color-primary-s: 77%;
    --color-primary-l: 39%;
    --color-primary-a: 1;
    --color-primary: hsla(var(--color-primary-h), var(--color-primary-s), var(--color-primary-l), var(--color-primary-a));
}

.dark-theme {
    --color-primary-h: 195deg;
    --color-primary-s: 54%;
    --color-primary-l: 57%;
    --color-primary-a: 1;
    --color-primary: hsla(var(--color-primary-h), var(--color-primary-s), var(--color-primary-l), var(--color-primary-a));
}
~~~


### Animation `theme[name].animation`

~~~ts
import { defineConfig } from '@inkline/config';

export default defineConfig({
    theme: {
        default: {
            animation: {
                duration: '300ms',
                timingFunction: 'ease'
            }
        }
    }
});
~~~

**Output**:

~~~scss
:root {
    --transition-duration: 300ms;
    --transition-timing-function: ease;
}
~~~

### Border `theme[name].border`

~~~ts
import { defineConfig } from '@inkline/config';

export default defineConfig({
    theme: {
        default: {
            border: '1px solid #c4cdd0'
        }
    }
});
~~~

**Output**:

~~~scss
:root {
    --border-top-width: 1px;
    --border-right-width: 1px;
    --border-bottom-width: 1px;
    --border-left-width: 1px;
    --border-width: var(--border-top-width) var(--border-right-width) var(--border-bottom-width) var(--border-left-width);
    --border-top-style: solid;
    --border-right-style: solid;
    --border-bottom-style: solid;
    --border-left-style: solid;
    --border-style: var(--border-top-style) var(--border-right-style) var(--border-bottom-style) var(--border-left-style);
    --border-top-color: #c4cdd0;
    --border-right-color: #c4cdd0;
    --border-bottom-color: #c4cdd0;
    --border-left-color: #c4cdd0;
    --border-color: var(--border-top-color) var(--border-right-color) var(--border-bottom-color) var(--border-left-color);
}
~~~

Border sides can also be specified individually as strings or objects.

~~~ts
import { defineConfig } from '@inkline/config';

export default defineConfig({
    theme: {
        default: {
            border: {
                top: {
                    width: '1px',
                    style: 'solid',
                    color: '#c4cdd0'
                },
                right: '1px solid #c4cdd0',
                bottom: '1px solid #c4cdd0',
                left: '1px solid #c4cdd0'
            }
        }
    }
});
~~~

### Border Radius `theme[name].borderRadius`

~~~ts
import { defineConfig } from '@inkline/config';

export default defineConfig({
    theme: {
        default: {
            borderRadius: '4px'
        }
    }
});
~~~

**Output**:

~~~scss
:root {
    --border-top-left-radius: 4px;
    --border-top-right-radius: 4px;
    --border-bottom-right-radius: 4px;
    --border-bottom-left-radius: 4px;
    --border-radius: var(--border-top-left-radius) var(--border-top-right-radius) var(--border-bottom-right-radius) var(--border-bottom-left-radius);
}
~~~

Border radius corners can also be specified individually, or as an array of values.

~~~ts
import { defineConfig } from '@inkline/config';

export default defineConfig({
    theme: {
        default: {
            borderRadius: {
                topLeft: '4px',
                topRight: '4px',
                bottomRight: '4px',
                bottomLeft: '4px',
            }
        }
    }
});
~~~

### Box Shadow `theme[name].boxShadow`

~~~ts
import { defineConfig } from '@inkline/config';

export default defineConfig({
    theme: {
        default: {
            boxShadow: {
                offsetX: '0',
                offsetY: '0.5rem',
                blurRadius: '1rem',
                spreadRadius: '-0.75rem',
                color: 'rgba(0, 0, 0, 0.15)'
            }
        }
    }
});
~~~

**Output**:

~~~scss
:root {
    --box-shadow-offset-x: 0;
    --box-shadow-offset-y: 0.5rem;
    --box-shadow-blur-radius: 1rem;
    --box-shadow-spread-radius: -0.75rem;
    --box-shadow-color: rgba(0, 0, 0, 0.15);
    --box-shadow: var(--box-shadow-offset-x) var(--box-shadow-offset-y) var(--box-shadow-blur-radius) var(--box-shadow-spread-radius) var(--box-shadow-color);
}
~~~

### Breakpoints `theme[name].breakpoints`

~~~ts
import { defineConfig } from '@inkline/config';

export default defineConfig({
    theme: {
        default: {
            breakpoints: {
                xs: 0,
                sm: 576,
                md: 768,
                lg: 992,
                xl: 1200,
                '2xl': 1400
            }
        }
    }
});
~~~

**Output**:

~~~scss
:root {
    --breakpoint-xs: 0px;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --breakpoint-2xl: 1400px;
}
~~~

### Color `theme[name].color`

~~~ts
import { defineConfig } from '@inkline/config';

export default defineConfig({
    theme: {
        default: {
            color: {
                gray: '#8e9fa4',
                dark: 'var(--color-gray)',
            }
        }
    }
});
~~~

**Output**:

~~~scss
:root {
    --color-gray-h: 193.63636363636363;
    --color-gray-s: 10.784313725490199%;
    --color-gray-l: 60.00000000000001%;
    --color-gray-a: 1;
    --color-gray: hsla(var(--color-gray-h), var(--color-gray-s), var(--color-gray-l), var(--color-gray-a));

    --color-dark-h: var(--color-gray-h);
    --color-dark-s: var(--color-gray-s);
    --color-dark-l: var(--color-gray-l);
    --color-dark-a: var(--color-gray-a);
    --color-dark: hsla(var(--color-dark-h), var(--color-dark-s), var(--color-dark-l), var(--color-dark-a));
}
~~~

You can also define colors as HSLA or RGB.

~~~ts
import { defineConfig } from '@inkline/config';

export default defineConfig({
    theme: {
        default: {
            color: {
                primary: {
                    h: 86,
                    s: 175,
                    l: 205,
                    a: 1
                },
                secondary: {
                    r: 195,
                    g: 54,
                    b: 57,
                    a: 1
                },
            }
        }
    }
});
~~~

### Color `theme[name].margin`

~~~ts
import { defineConfig } from '@inkline/config';

export default defineConfig({
    theme: {
        default: {
            margin: '1rem'
        }
    }
});
~~~

**Output**:

~~~scss
:root {
    --margin-top: 1rem;
    --margin-right: 1rem;
    --margin-bottom: 1rem;
    --margin-left: 1rem;
    --margin: var(--margin-top) var(--margin-right) var(--margin-bottom) var(--margin-left);
}
~~~

Margin sides can also be specified individually, or as an array of values.

~~~ts
import { defineConfig } from '@inkline/config';

export default defineConfig({
    theme: {
        default: {
            margin: {
                top: '1rem',
                right: '1rem',
                bottom: '1rem',
                left: '1rem'
            }
        }
    }
});
~~~

### Color `theme[name].padding`

~~~ts
import { defineConfig } from '@inkline/config';

export default defineConfig({
    theme: {
        default: {
            padding: '1rem'
        }
    }
});
~~~

**Output**:

~~~scss
:root {
    --padding-top: 1rem;
    --padding-right: 1rem;
    --padding-bottom: 1rem;
    --padding-left: 1rem;
    --padding: var(--padding-top) var(--padding-right) var(--padding-bottom) var(--padding-left);
}
~~~

Padding sides can also be specified individually, or as an array of values.

~~~ts
import { defineConfig } from '@inkline/config';

export default defineConfig({
    theme: {
        default: {
            padding: {
                top: '1rem',
                right: '1rem',
                bottom: '1rem',
                left: '1rem'
            }
        }
    }
});
~~~

### Scale Ratio `theme[name].scaleRatio`

~~~ts
import { defineConfig } from '@inkline/config';

export default defineConfig({
    theme: {
        default: {
            scaleRatio: {
                minorSecond: 1.067,
                majorSecond: 1.125,
                minorThird: 1.2,
                majorThird: 1.25,
                perfectFourth: 1.333,
                augmentedFourth: 1.414,
                perfectFifth: 1.5,
                golden: 1.618,
                primary: 'var(--scale-ratio-minor-third)'
            }
        }
    }
});
~~~

**Output**:

~~~scss
:root {
    --scale-ratio-minor-second: 1.067;
    --scale-ratio-major-second: 1.125;
    --scale-ratio-minor-third: 1.2;
    --scale-ratio-major-third: 1.25;
    --scale-ratio-perfect-fourth: 1.333;
    --scale-ratio-augmented-fourth: 1.414;
    --scale-ratio-perfect-fifth: 1.5;
    --scale-ratio-golden: 1.618;
    --scale-ratio: var(--scale-ratio-minor-third);
    --scale-ratio-pow-1: var(--scale-ratio);
    --scale-ratio-pow-2: calc(var(--scale-ratio-pow-1) * var(--scale-ratio));
    --scale-ratio-pow-3: calc(var(--scale-ratio-pow-2) * var(--scale-ratio));
    --scale-ratio-pow-4: calc(var(--scale-ratio-pow-3) * var(--scale-ratio));
    --scale-ratio-pow-5: calc(var(--scale-ratio-pow-4) * var(--scale-ratio));
    --scale-ratio-pow-6: calc(var(--scale-ratio-pow-5) * var(--scale-ratio));
}
~~~

### Size `theme[name].size`

~~~ts
import { defineConfig } from '@inkline/config';

export default defineConfig({
    theme: {
        default: {
            size: {
                multiplier: 1,
                percentages: {
                    0: '0%',
                    25: '25%',
                    50: '50%',
                    75: '75%',
                    100: '100%'
                }
            }
        }
    }
});
~~~

**Output**:

~~~scss
:root {
    --size-multiplier: 1;
    --size-percentages-0: 0%;
    --size-percentages-25: 25%;
    --size-percentages-50: 50%;
    --size-percentages-75: 75%;
    --size-percentages-100: 100%;
}
~~~


### Typography `theme[name].typography`

~~~ts
import { defineConfig } from '@inkline/config';

export default defineConfig({
    theme: {
        default: {
            typography: {
                fontFamily: {
                    primary: {
                        base: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
                        monospace:
                            "'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                        print: "'Georgia', 'Times New Roman', 'Times', serif"
                    },
                    secondary: {
                        base: 'var(--font-family-primary-base)',
                        monospace: 'var(--font-family-primary-monospace)',
                        print: 'var(--font-family-primary-print)'
                    }
                },
                fontWeight: {
                    extralight: 200,
                    light: 300,
                    normal: 'normal',
                    semibold: 600,
                    bold: 'bold',
                    black: 900,
                    lighter: 'lighter',
                    bolder: 'bolder'
                },
                fontSize: '1rem',
                lineHeight: 1.5,
                letterSpacing: 0,
                color: {
                    dark: 'var(--color-gray-900)',
                    muted: 'var(--color-gray-600)',
                    light: 'var(--color-gray-100)'
                },
                contrastColor: {
                    light: 'var(--color-gray-900)',
                    dark: 'var(--color-white)'
                }
            }
        }
    }
});
~~~

**Output**:

~~~scss
:root {
    --font-family-primary-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    --font-family-primary-monospace: 'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
    --font-family-primary-print: 'Georgia', 'Times New Roman', 'Times', serif;
    --font-family-secondary-base: var(--font-family-primary-base);
    --font-family-secondary-monospace: var(--font-family-primary-monospace);
    --font-family-secondary-print: var(--font-family-primary-print);
    --font-weight-extralight: 200;
    --font-weight-light: 300;
    --font-weight-normal: normal;
    --font-weight-semibold: 600;
    --font-weight-bold: bold;
    --font-weight-black: 900;
    --font-weight-lighter: lighter;
    --font-weight-bolder: bolder;
    --font-size: 1rem;
    --line-height: 1.5;
    --letter-spacing: 0;
    --contrast-color--light: var(--color-gray-900);
    --contrast-color--dark: var(--color-white);
}
~~~

### Elements `theme[name].elements`

The `elements` property provides a way to add generic element-specific variables. Each nested key inside of `elements` will be concatenated to the variable name using a `--` (double dash), unless it's part of a known CSS property (i.e. `body.margin.top` -> `body--margin-top`). 

~~~ts
import { defineConfig } from '@inkline/config';

export default defineConfig({
    theme: {
        default: {
            elements: {
                body: {
                    background: 'var(--color-white)',
                    color: 'var(--color-gray-900)'
                },
                grid: {
                    columns: 12,
                    gutter: '28px'
                }
            }
        }
    }
});
~~~

**Output**:

~~~scss
:root {
    --body--background: var(--color-white);
    --body--color: var(--color-gray-900);
    --grid--columns: 12;
    --grid--gutter: 28px;
}
~~~


### Variants `theme[name].variants`

Variants provide a way to apply modifiers to generate multiple variable versions based on the initial base value. 

~~~ts
import { defineConfig } from '@inkline/config';

export default defineConfig({
    theme: {
        default: {
            variants: {
                color: {
                    primary: {
                        'shade-50': { darken: 5 },
                        'tint-50': { lighten: 5 }
                    }
                }, 
                margin: {
                        '1-2': { divide: 2 },
                        2: { multiply: 2 }
                }
            }
        }
    }
});
~~~

**Output**:

~~~scss
:root {
    --color-primary-shade-50-h: var(--color-primary-h);
    --color-primary-shade-50-s: var(--color-primary-s);
    --color-primary-shade-50-l: calc(var(--color-primary-l) - 5%);
    --color-primary-shade-50-a: var(--color-primary-a);
    --color-primary-shade-50: hsla(var(--color-primary-shade-50-h), var(--color-primary-shade-50-s), var(--color-primary-shade-50-l), var(--color-primary-shade-50-a));
    --color-primary-tint-50-h: var(--color-primary-h);
    --color-primary-tint-50-s: var(--color-primary-s);
    --color-primary-tint-50-l: calc(var(--color-primary-l) + 5%);
    --color-primary-tint-50-a: var(--color-primary-a);
    --color-primary-tint-50: hsla(var(--color-primary-tint-50-h), var(--color-primary-tint-50-s), var(--color-primary-tint-50-l), var(--color-primary-tint-50-a));
    --margin-top-1-2: calc(var(--margin-top) / 2);
    --margin-right-1-2: calc(var(--margin-right) / 2);
    --margin-bottom-1-2: calc(var(--margin-bottom) / 2);
    --margin-left-1-2: calc(var(--margin-left) / 2);
    --margin-1-2: var(--margin-top-1-2) var(--margin-right-1-2) var(--margin-bottom-1-2) var(--margin-left-1-2);
--margin-top-2: calc(var(--margin-top) * 2);
    --margin-right-2: calc(var(--margin-right) * 2);
    --margin-bottom-2: calc(var(--margin-bottom) * 2);
    --margin-left-2: calc(var(--margin-left) * 2);
    --margin-2: var(--margin-top-2) var(--margin-right-2) var(--margin-bottom-2) var(--margin-left-2);
}
~~~

Color type values accept the following variant modifiers:

- `hue` or `h`
- `saturation` or `s`
- `lightness` or `l`
- `alpha` or `a`
- `lighten`
- `darken`
- `saturate`
- `desaturate`
- `grayscale`
- `fade`
- `opaquer`
- `rotate`

Number type values accept the following variant modifiers:

- `multiply`
- `divide`
- `add`
- `subtract`
