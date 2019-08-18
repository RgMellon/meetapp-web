export function detailMeetup(meetup) {
  return {
    type: '@meetup/DETAIL_MEETUP',
    payload: { meetup },
  };
}
