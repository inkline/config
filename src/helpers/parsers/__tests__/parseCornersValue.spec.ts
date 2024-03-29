import { Configuration, ConfigurationContext, FnProperty } from '../../../types';
import { parseCornersValue } from '../parseCornersValue';

describe('helpers', () => {
    describe('parsers', () => {
        describe('parseCornersValue', () => {
            it('should return same value for all sides if one value string', () => {
                const config = {} as Configuration;
                const value = '1rem';
                const context: ConfigurationContext<any, any> = { config, value, theme: {}, path: [] };

                expect(parseCornersValue(context)).toEqual({
                    topLeft: value,
                    topRight: value,
                    bottomRight: value,
                    bottomLeft: value
                });
            });

            it('should return value for top-bottom, left-right sides if two value string', () => {
                const config = {} as Configuration;
                const value = '1rem 2rem';
                const parts = value.split(' ');
                const context: ConfigurationContext<any, any> = { config, value, theme: {}, path: [] };

                expect(parseCornersValue(context)).toEqual({
                    topLeft: parts[0],
                    topRight: parts[1],
                    bottomRight: parts[0],
                    bottomLeft: parts[1]
                });
            });

            it('should return value for top, left-right, bottom sides if three value string', () => {
                const config = {} as Configuration;
                const value = '1rem 2rem 3rem';
                const parts = value.split(' ');
                const context: ConfigurationContext<any, any> = { config, value, theme: {}, path: [] };

                expect(parseCornersValue(context)).toEqual({
                    topLeft: parts[0],
                    topRight: parts[1],
                    bottomRight: parts[2],
                    bottomLeft: parts[1]
                });
            });

            it('should return value for top, right, bottom, left sides if four value string', () => {
                const config = {} as Configuration;
                const value = '1rem 2rem 3rem 4rem';
                const parts = value.split(' ');
                const context: ConfigurationContext<any, any> = { config, value, theme: {}, path: [] };

                expect(parseCornersValue(context)).toEqual({
                    topLeft: parts[0],
                    topRight: parts[1],
                    bottomRight: parts[2],
                    bottomLeft: parts[3]
                });
            });

            it('should return same value for all sides if one value array', () => {
                const config = {} as Configuration;
                const value = ['1rem'];
                const context: ConfigurationContext<any, any> = { config, value, theme: {}, path: [] };

                expect(parseCornersValue(context)).toEqual({
                    topLeft: value[0],
                    topRight: value[0],
                    bottomRight: value[0],
                    bottomLeft: value[0]
                });
            });

            it('should return value for top-bottom, left-right sides if two value array', () => {
                const config = {} as Configuration;
                const value = ['1rem', '2rem'];
                const context: ConfigurationContext<any, any> = { config, value, theme: {}, path: [] };

                expect(parseCornersValue(context)).toEqual({
                    topLeft: value[0],
                    topRight: value[1],
                    bottomRight: value[0],
                    bottomLeft: value[1]
                });
            });

            it('should return value for top, left-right, bottom sides if three value array', () => {
                const config = {} as Configuration;
                const value = ['1rem', '2rem', '3rem'];
                const context: ConfigurationContext<any, any> = { config, value, theme: {}, path: [] };

                expect(parseCornersValue(context)).toEqual({
                    topLeft: value[0],
                    topRight: value[1],
                    bottomRight: value[2],
                    bottomLeft: value[1]
                });
            });

            it('should return value for top, right, bottom, left sides if four value array', () => {
                const config = {} as Configuration;
                const value = ['1rem', '2rem', '3rem', '4rem'];
                const context: ConfigurationContext<any, any> = { config, value, theme: {}, path: [] };

                expect(parseCornersValue(context)).toEqual({
                    topLeft: value[0],
                    topRight: value[1],
                    bottomRight: value[2],
                    bottomLeft: value[3]
                });
            });

            it('should return same value for all sides if number', () => {
                const config = {} as Configuration;
                const value = 10;
                const context: ConfigurationContext<any, any> = { config, value, theme: {}, path: [] };

                expect(parseCornersValue(context)).toEqual({
                    topLeft: value,
                    topRight: value,
                    bottomRight: value,
                    bottomLeft: value
                });
            });

            it('should call parseFn and parse return value if function', () => {
                const config = {
                    resolvers: [],
                    generators: [],
                    theme: {
                        default: {
                            borderRadius: '1rem 2rem 3rem 4rem'
                        }
                    }
                } as Configuration;
                const value: FnProperty<string[]> = ({ theme }) => {
                    const parts = (theme.borderRadius as string).split(' ');

                    return [
                        parts[0],
                        parts[1],
                        parts[2],
                        parts[3]
                    ];
                };
                const context: ConfigurationContext<any, any> = { config, value, theme: config.theme.default, path: [] };

                expect(parseCornersValue(context)).toEqual({
                    topLeft: '1rem',
                    topRight: '2rem',
                    bottomRight: '3rem',
                    bottomLeft: '4rem'
                });
            });
        });
    });
});
