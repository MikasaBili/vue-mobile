import Home from './components/HelloFromVux';
export default function (router) {
	router.map({
		'/': {
			component: Home
		}
	})
}