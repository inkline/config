import {
    marginResolver,
    marginDefaultResolver,
    marginSideResolver,
    marginVariantResolver
} from '../margin';
import { Configuration, Theme } from '../../types';

describe('resolvers', () => {
    describe('margin', () => {
        describe('test', () => {
            it('should match direct path', () => {
                const path = 'margin';
                expect((marginResolver.test as RegExp).test(path)).toEqual(true);
            });

            it('should match nested path', () => {
                const path = 'nested.margin';
                expect((marginResolver.test as RegExp).test(path)).toEqual(true);
            });
        });

        describe('set', () => {
            it('should replace direct path', () => {
                const path = 'margin';
                expect(path.replace(marginResolver.test as RegExp, marginResolver.set as string)).toEqual('margin');
            });

            it('should replace nested path', () => {
                const path = 'nested.margin';
                expect(path.replace(marginResolver.test as RegExp, marginResolver.set as string)).toEqual('nested.margin');
            });
        });

        describe('resolve', () => {
            it('should return value sides', () => {
                const config = {} as Configuration;
                const theme = {} as Theme;
                const value = '1rem';
                const path = ['margin'];

                expect(marginResolver.apply({ config, theme, value, path })).toEqual({
                    top: '1rem',
                    right: '1rem',
                    bottom: '1rem',
                    left: '1rem'
                });
            });
        });
    });

    describe('margin.default', () => {
        describe('test', () => {
            it('should match direct path', () => {
                const path = 'margin.default';
                expect((marginDefaultResolver.test as RegExp).test(path)).toEqual(true);
            });

            it('should match nested path', () => {
                const path = 'nested.margin.default';
                expect((marginDefaultResolver.test as RegExp).test(path)).toEqual(true);
            });
        });

        describe('set', () => {
            it('should replace direct path', () => {
                const path = 'margin.default';
                expect(path.replace(marginDefaultResolver.test as RegExp, marginDefaultResolver.set as string)).toEqual('margin');
            });

            it('should replace nested path', () => {
                const path = 'nested.margin.default';
                expect(path.replace(marginDefaultResolver.test as RegExp, marginDefaultResolver.set as string)).toEqual('nested.margin');
            });
        });

        describe('resolve', () => {
            it('should return value sides', () => {
                const config = {} as Configuration;
                const theme = {} as Theme;
                const value = '1rem';
                const path = ['margin', 'default'];

                expect(marginDefaultResolver.apply({ config, theme, value, path })).toEqual({
                    top: '1rem',
                    right: '1rem',
                    bottom: '1rem',
                    left: '1rem'
                });
            });
        });
    });

    describe('margin.[side]', () => {
        describe('test', () => {
            it('should match direct path', () => {
                const path = 'margin.top';
                expect((marginSideResolver.test as RegExp).test(path)).toEqual(true);
            });

            it('should match nested path', () => {
                const path = 'nested.margin.top';
                expect((marginSideResolver.test as RegExp).test(path)).toEqual(true);
            });
        });

        describe('set', () => {
            it('should replace direct path', () => {
                const path = 'margin.top';
                expect(path.replace(marginSideResolver.test as RegExp, marginSideResolver.set as string)).toEqual('margin.top');
            });

            it('should replace nested path', () => {
                const path = 'nested.margin.top';
                expect(path.replace(marginSideResolver.test as RegExp, marginSideResolver.set as string)).toEqual('nested.margin.top');
            });
        });

        describe('resolve', () => {
            it('should return value sides', () => {
                const config = {} as Configuration;
                const theme = {} as Theme;
                const value = '1rem';
                const path = ['margin', 'top'];

                expect(marginSideResolver.apply({ config, theme, value, path })).toEqual(value);
            });
        });
    });

    describe('variants.margin.[variant]', () => {
        describe('test', () => {
            it('should match direct path', () => {
                const path = 'variants.margin.lg';
                expect((marginVariantResolver.test as RegExp).test(path)).toEqual(true);
            });
        });

        describe('set', () => {
            it('should replace direct path', () => {
                const path = 'variants.margin.xl';
                expect(path.replace(marginVariantResolver.test as RegExp, marginVariantResolver.set as string)).toEqual('variants.margin.xl');
            });
        });

        describe('resolve', () => {
            it('should return value sides from string', () => {
                const config = {} as Configuration;
                const theme = {} as Theme;
                const value = '1rem';
                const path = ['variants', 'margin', 'lg'];

                expect(marginVariantResolver.apply({ config, theme, value, path })).toEqual({
                    top: value,
                    right: value,
                    bottom: value,
                    left: value
                });
            });

            it('should return value sides from object', () => {
                const config = {} as Configuration;
                const theme = {} as Theme;
                const value = { top: '1rem', bottom: '2rem' };
                const path = ['variants', 'margin', 'lg'];

                expect(marginVariantResolver.apply({ config, theme, value, path })).toEqual({
                    top: value.top,
                    bottom: value.bottom
                });
            });
        });
    });
});
