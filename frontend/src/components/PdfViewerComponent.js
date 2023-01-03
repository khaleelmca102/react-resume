import { useEffect, useRef } from 'react';

const PdfViewerComponent = (props) => {
	const containerRef = useRef('');	
	console.log(props.document)
	useEffect(() => {
		const container = containerRef.current;
		let instance, PSPDFKit;
		(async function () {
			PSPDFKit = await import('pspdfkit');
			instance = await PSPDFKit.load({
				// Container where PSPDFKit should be mounted.
				container,
				// The document to open.
				document: props.document,
				// Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
				baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
				//baseUrl: 'http://localhost:8000/storage/assets/pdfs/'
			});
		})();

		return () => PSPDFKit && PSPDFKit.unload(container);
	}, []);

	return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
}

export default PdfViewerComponent