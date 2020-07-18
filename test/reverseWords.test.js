import reverseWords from '../code/string/reserver'

test('test word reserve', () => {
    expect(reverseWords('I love you')).toBe('I evol uoy')
})