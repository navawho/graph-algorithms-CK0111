import React, { useState } from 'react';
import { Graph } from 'react-d3-graph';

import { Container, Content, GraphDiv, Buttons } from './styles';

const graphConfig = {
	node: {
		color: 'lightgreen',
		size: 700,
		fontSize: 16,
	},
	link: {
		strokeWidth: 5,
	},
};

const Home: React.FC = () => {
	const [nodes, setNodes] = useState<{ id: string }[]>([{ id: '1' }]);
	const [links, setLinks] = useState<{ source: string; target: string }[]>([]);

	const handleAddNode = (): void => {
		setNodes([...nodes, { id: '4' }]);
	};

	const handleAddLink = (): void => {
		setLinks([...links, { source: '1', target: '4' }]);
	};

	return (
		<Container>
			<Content>
				<Buttons>
					<button type="button" onClick={handleAddLink}>
						Adicionar vértice
					</button>
					<button type="button" onClick={handleAddNode}>
						Adicionar aresta
					</button>
				</Buttons>
				<GraphDiv>
					<Graph id="graph-id" data={{ nodes, links }} config={graphConfig} />
				</GraphDiv>
			</Content>
		</Container>
	);
};

export default Home;
