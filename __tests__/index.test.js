import translit from './../src/index';

describe('translit-geo', () => {
  it('works with empty string', () => {
    expect(translit('')).toBe('');
  });

  it('works with georgian letters', () => {
    expect(translit('abgdevzTiklmnopJrstufqRySCcZwWxjh')).toBe(
      'აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ'
    );
  });

  it('works with numbers', () => {
    expect(translit('01234567890')).toBe('01234567890');
  });

  it('works with special chars', () => {
    expect(translit('!@#$%^&*()_+ ;,><?/[]{}')).toBe('!@#$%^&*()_+ ;,><?/[]{}');
  });

  it('works with mixed content', () => {
    expect(translit('gamarjoba samyarov! 1+1 udris 2-s')).toBe(
      'გამარჯობა სამყაროვ! 1+1 უდრის 2-ს'
    );
  });
});
