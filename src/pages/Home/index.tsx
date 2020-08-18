import React, { useState } from 'react';
import { Graph } from 'react-d3-graph';

import { Container, Content, GraphDiv, Buttons, InputWrapper } from './styles';

const graphConfig = {
	node: {
		color: 'lightgreen',
		size: 700,
		fontSize: 16,
	},
	link: {
		strokeWidth: 5,
	},
	directed: true,
};

const Home: React.FC = () => {
	const [nodes, setNodes] = useState<{ id: string }[]>([
		{ id: '1' },
		{ id: '2' },
	]);
	const [links, setLinks] = useState<{ source: string; target: string }[]>([
		{ source: '1', target: '2' },
	]);

	const [node, setNode] = useState('');
	const [link, setLink] = useState('');

	const handleAddNode = (): void => {
		setNodes((prevNodes) => [...prevNodes, { id: node }]);
		setNode('');
	};

	const handleAddLink = (): void => {
		const source = link.slice(0, 1);
		const target = link.slice(2);

		setLinks((prevLinks) => [...prevLinks, { source, target }]);
		setLink('');
	};

	return (
		<Container>
			<Content>
				<Buttons>
					<InputWrapper>
						<input
							value={node}
							onChange={(e) => setNode(e.target.value)}
							placeholder="Vértice 1, 2, 3..."
						/>
						<button type="button" onClick={handleAddNode}>
							Adicionar vértice
						</button>
					</InputWrapper>
					<InputWrapper>
						<input
							value={link}
							onChange={(e) => setLink(e.target.value)}
							placeholder="Aresta (2,3) (2,1) (3,2)..."
						/>
						<button type="button" onClick={handleAddLink}>
							Adicionar aresta
						</button>
					</InputWrapper>
				</Buttons>
				<GraphDiv>
					<Graph id="graph-id" data={{ nodes, links }} config={graphConfig} />
				</GraphDiv>
			</Content>
		</Container>
	);
};

export default Home;
