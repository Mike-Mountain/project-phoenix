import {BreakTitlePipe} from './break-title.pipe';
import {Title} from '../../models/api-params.model';

describe('BreakTitlePipe', () => {
  it('create an instance', () => {
    const pipe = new BreakTitlePipe();
    expect(pipe).toBeTruthy();
  });

  it('should break a title if there is a colon', () => {
    const pipe = new BreakTitlePipe();
    const title = 'This: is a fake title';
    const titleObject = new Title({title: 'This', subtitle: ' is a fake title'});
    expect(pipe.transform(title)).toEqual(titleObject);
  });

  it('should return a Title type if there is a colon', () => {
    const pipe = new BreakTitlePipe();
    const title = 'This: is a fake title';
    expect(pipe.transform(title)).toBeInstanceOf(Title);
  });

  it('should return undefined if there is no colon', () => {
    const pipe = new BreakTitlePipe();
    const title = 'This is a fake title';
    expect(pipe.transform(title)).toBeUndefined();
  });
});
