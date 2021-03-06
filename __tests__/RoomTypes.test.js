import RoomTypes from '../src/components/RoomTypes.jsx';
import {render} from 'enzyme';


describe('RoomTypes.jsx', () => {
  test('it should exist', () => {
    expect(new RoomTypes()).toBeDefined();
  });

  test('it should be an instance of a class', () => {
    expect(new RoomTypes()).toBeInstanceOf(RoomTypes);
  });

  test('it should have state', () => {
    const newRoomTypesState = new RoomTypes();
    const currentRoomTypesState = {roomTypesIcons: ['fas fa-bed', 'fas fa-campground', 'fas fa-building', 'fas fa-couch']};
    expect(newRoomTypesState.state).toEqual(currentRoomTypesState);
  });

  // Enzyme
  it('it should render', () => {
    const wrapper = render(<RoomTypes />);
    expect(wrapper['0']).toHaveProperty('name', 'div');
  });

  it('it should have three children', () => {
    const wrapper = render(<RoomTypes />);
    expect(wrapper['0'].children).toHaveLength(3);
  });
});