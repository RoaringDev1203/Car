import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";

import { Provider } from '@/context';
import App from './app';

import './index.scss';

createRoot(document.getElementById("root") as HTMLElement).render(
	<BrowserRouter>
		<Provider>
			<App />
		</Provider>
	</BrowserRouter>
);