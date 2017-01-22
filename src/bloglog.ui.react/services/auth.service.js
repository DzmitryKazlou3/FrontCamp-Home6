
import cookie from 'react-cookie';

export function logOut() {
	cookie.remove("Id");
	cookie.remove("Token.JWT");
	window.location.href = window.location.href;
}