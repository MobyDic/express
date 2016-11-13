export default function canonize(url) {
  const re = new RegExp('@?(https?:)?(\/\/)?((www.vk|telegram|vk|vkontakte|twitter|github)[^\/]*\/)?([a-zA-Z0-9]*)', 'i');
  const username = url.match(re)[5];
  return '@' + username;
}
