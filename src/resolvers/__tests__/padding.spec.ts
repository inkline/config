import {
    paddingResolver,
    paddingDefaultResolver,
    paddingSideResolver,
    paddingVariantResolver
} from '../padding';
import { Configuration, Theme } from '../../types';

describe('resolvers', () => {
    describe('padding', () => {
        describe('test', () => {
            it('should match direct path', () => {
                const path = 'padding';
                expect((paddingResolver.test as RegExp).test(path)).toEqual(true);
            });

            it('should match nested path', () => {
                const path = 'nested.padding';
                expect((paddingResolver.test as RegExp).test(path)).toEqual(true);
            });
        });

        describe('set', () => {
            it('should replace direct path', () => {
                const path = 'padding';
                expect(path.replace(paddingResolver.test as RegExp, paddingResolver.set as string)).toEqual('padding');
            });

            it('should replace nested path', () => {
                const path = 'nested.padding';
                expect(path.replace(paddingResolver.test as RegExp, paddingResolver.set as string)).toEqual('nested.padding');
            });
        });

        describe('resolve', () => {
            it('should return value sides', () => {
                const config = {} as Configuration;
                const theme = {} as Theme;
                const value = '1rem';
                const path = ['padding'];

                expect(paddingResolver.apply({ config, theme, value, path })).toEqual({
                    top: '1rem',
                    right: '1rem',
                    bottom: '1rem',
                    left: '1rem'
                });
            });
        });
    });

    describe('padding.default', () => {
        describe('test', () => {
            it('should match direct path', () => {
                const path = 'padding.default';
                expect((paddingDefaultResolver.test as RegExp).test(path)).toEqual(true);
            });

            it('should match nested path', () => {
                const path = 'nested.padding.default';
                expect((paddingDefaultResolver.test as RegExp).test(path)).toEqual(true);
            });
        });

        describe('set', () => {
            it('should replace direct path', () => {
                const path = 'padding.default';
                expect(path.replace(paddingDefaultResolver.test as RegExp, paddingDefaultResolver.set as string)).toEqual('padding');
            });

            it('should replace nested path', () => {
                const path = 'nested.padding.default';
                expect(path.replace(paddingDefaultResolver.test as RegExp, paddingDefaultResolver.set as string)).toEqual('nested.padding');
            });
        });

        describe('resolve', () => {
            it('should return value sides', () => {
                const config = {} as Configuration;
                const theme = {} as Theme;
                const value = '1rem';
                const path = ['padding', 'default'];

                expect(paddingDefaultResolver.apply({ config, theme, value, path })).toEqual({
                    top: '1rem',
                    right: '1rem',
                    bottom: '1rem',
                    left: '1rem'
                });
            });
        });
    });

    describe('padding.[side]', () => {
        describe('test', () => {
            it('should match direct path', () => {
                const path = 'padding.top';
                expect((paddingSideResolver.test as RegExp).test(path)).toEqual(true);
            });

            it('should match nested path', () => {
                const path = 'nested.padding.top';
                expect((paddingSideResolver.test as RegExp).test(path)).toEqual(true);
            });
        });

        describe('set', () => {
            it('should replace direct path', () => {
                const path = 'padding.top';
                expect(path.replace(paddingSideResolver.test as RegExp, paddingSideResolver.set as string)).toEqual('padding.top');
            });

            it('should replace nested path', () => {
                const path = 'nested.padding.top';
                expect(path.replace(paddingSideResolver.test as RegExp, paddingSideResolver.set as string)).toEqual('nested.padding.top');
            });
        });

        describe('resolve', () => {
            it('should return value sides', () => {
                const config = {} as Configuration;
                const theme = {} as Theme;
                const value = '1rem';
                const path = ['padding', 'top'];

                expect(paddingSideResolver.apply({ config, theme, value, path })).toEqual(value);
            });
        });
    });

    describe('variants.padding.[variant]', () => {
        describe('test', () => {
            it('should match direct path', () => {
                const path = 'variants.padding.lg';
                expect((paddingVariantResolver.test as RegExp).test(path)).toEqual(true);
            });
        });

        describe('set', () => {
            it('should replace direct path', () => {
                const path = 'variants.padding.xl';
                expect(path.replace(paddingVariantResolver.test as RegExp, paddingVariantResolver.set as string)).toEqual('variants.padding.xl');
            });
        });

        describe('resolve', () => {
            it('should return value sides from string', () => {
                const config = {} as Configuration;
                const theme = {} as Theme;
                const value = '1rem';
                const path = ['variants', 'padding', 'lg'];

                expect(paddingVariantResolver.apply({ config, theme, value, path })).toEqual({
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
                const path = ['variants', 'padding', 'lg'];

                expect(paddingVariantResolver.apply({ config, theme, value, path })).toEqual({
                    top: value.top,
                    bottom: value.bottom
                });
            });
        });
    });
});
