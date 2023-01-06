import { useEffect, useRef } from 'react';

const PdfViewerComponent = (props) => {
	const containerRef = useRef('');	
	console.log(props.document)
	useEffect(() => {
		const container = containerRef.current;
		let instance, PSPDFKit;
		console.log(props.document);
		(async function () {
			const documentObjectUrl = URL.createObjectURL(props.document);
			PSPDFKit = await import('pspdfkit');
			instance = await PSPDFKit.load({
				// Container where PSPDFKit should be mounted.
				container,
				// The document to open.
				document: props.document,
				// Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
				//baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
				//baseUrl: 'http://localhost:8000/storage/assets/pdfs/'
			});
			// const headers = new Headers();
			// headers.set("Access-Control-Allow-Origin",'http://localhost:8000');
			// headers.set("Access-Control-Allow-Methods",'GET, POST, PATCH, PUT, DELETE, OPTIONS');
			// headers.set("Access-Control-Allow-Headers",'Origin, Content-Type, X-Auth-Token');

			// const pdfResponse = fetch('http://localhost:8000/storage/assets/pdfs/sample3.pdf', { 
			// 	method: 'get', 
			// 	headers:{headers}
			//   }).then(async response => {
			// 	const data = await response.json();	
			// 	console.log("khaleel  "+data);
			//  }).catch(error => {
			// 	console.error('There was an error!', error);
			// });
			
			

			// //const pdfResponse = await fetch('http://localhost:8000/storage/assets/pdfs/sample3.pdf',{headers});
			// const documentBuffer = await pdfResponse.arrayBuffer();
		
			// // Pass the `ArrayBuffer` as a PDF option instead of a URL.
			// instance =  PSPDFKit.load({
			// document: documentBuffer
			// });

			// instance = PSPDFKit.load({
			// 	container,
			// 	document: 'http://localhost:8000/storage/assets/pdfs/sample3.pdf',
			// 	//baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
			// });
		})();

		

		return () => PSPDFKit && PSPDFKit.unload(container);
		
	}, []);

	return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
}

export default PdfViewerComponent