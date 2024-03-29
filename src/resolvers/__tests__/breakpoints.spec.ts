import { breakpointsResolver } from '../breakpoints';
import { Configuration, Theme } from '../../types';

describe('resolvers', () => {
    describe('breakpoints.[breakpoint]', () => {
        describe('test', () => {
            it('should match direct path', () => {
                const path = 'breakpoints.xs';
                expect((breakpointsResolver.test as RegExp).test(path)).toEqual(true);
            });

            it('should match nested path', () => {
                const path = 'nested.breakpoints.xs';
                expect((breakpointsResolver.test as RegExp).test(path)).toEqual(true);
            });
        });

        describe('set', () => {
            it('should replace direct path', () => {
                const path = 'breakpoints.xs';
                expect(path.replace(breakpointsResolver.test as RegExp, breakpointsResolver.set as string)).toEqual('breakpoints.xs');
            });

            it('should replace nested path', () => {
                const path = 'nested.breakpoints.xs';
                expect(path.replace(breakpointsResolver.test as RegExp, breakpointsResolver.set as string)).toEqual('nested.breakpoints.xs');
            });
        });

        describe('resolve', () => {
            it('should return value with unit', () => {
                const config = {} as Configuration;
                const theme = {} as Theme;
                const value = 576;
                const path = ['breakpoints', 'xs'];

                expect(breakpointsResolver.apply({ config, theme, value, path })).toEqual(`${value}px`);
            });

            it('should return value with already set unit', () => {
                const config = {} as Configuration;
                const theme = {} as Theme;
                const value = '36rem';
                const path = ['breakpoints', 'xs'];

                expect(breakpointsResolver.apply({ config, theme, value, path })).toEqual(value);
            });
        });
    });
});
