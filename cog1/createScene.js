/**
 * Populate the scene-graph with nodes,
 * calling methods form the scene-graph and node modules.
 *
 * Texture files have to exist in the "textures" sub-directory.
 *
 * @namespace cog1
 * @module createScene
 */
define(["exports", "scenegraph", "animation"], //
	function (exports, scenegraph, animation) {
		"use strict";

		/**
		 * 	Call methods form the scene-graph (tree) module to create the scene.
		 *
		 */
		function init() {

			var container = scenegraph.createNodeWithModel("Container", "cube", { scale: 400 })

			var cube = scenegraph.createNodeWithModel("Cube", "cube", { scale: 30 }, container);
			animation.assign(cube, 'move', {
				movementSpeed: [Math.random() * 2, Math.random() * 2, Math.random() * 2],
				sphereRadius: 20,
				boundingBoxMin: [-350, -350, -350],
				boundingBoxMax: [350, 350, 350]
			});

			var sphere_1 = scenegraph.createNodeWithModel("Sphere_1", "sphere", { resursionDepth: 3, scale: 20, color: 1 }, container);
			animation.assign(sphere_1, 'move', {
				movementSpeed: [Math.random() * 2, Math.random() * 2, Math.random() * 2],
				sphereRadius: 8,
				boundingBoxMin: [-400, -400, -400],
				boundingBoxMax: [400, 400, 400]
			});


			var sphere_2 = scenegraph.createNodeWithModel("Sphere_2", "sphere", { resursionDepth: 3, scale: 30, color: 2 }, container);
			animation.assign(sphere_2, 'move', {
				movementSpeed: [Math.random() * 2, Math.random() * 2, Math.random() * 2],
				sphereRadius: 20,
				boundingBoxMin: [-400, -400, -400],
				boundingBoxMax: [400, 400, 400]
			});

			var star = scenegraph.createNodeWithModel("Star", "star", { scale: 2 }, container);
			animation.assign(star, 'move', {
				movementSpeed: [Math.random() * 2, Math.random() * 2, Math.random() * 2],
				sphereRadius: 20,
				boundingBoxMin: [-370, -370, -370],
				boundingBoxMax: [370, 370, 370]
			});

			var diamond = scenegraph.createNodeWithModel("Diamond", "diamond", { resursionDepth: 2, scale: 20 }, container);
			animation.assign(diamond, 'move', {
				movementSpeed: [Math.random() * 2, Math.random() * 2, Math.random() * 2],
				sphereRadius: 20,
				boundingBoxMin: [-250, -250, -250],
				boundingBoxMax: [250, 250, 250]
			});

			var teapot = scenegraph.createNodeWithModel("Teapot", "teapot", { scale: 2, color:0 }, container);
			animation.assign(teapot, 'move', {
				movementSpeed: [Math.random() * 2, Math.random() * 2, Math.random() * 2],
				sphereRadius: 20,
				boundingBoxMin: [-390, -390, -390],
				boundingBoxMax: [390, 390, 390]
			});



			return;




			// Set visibility of nodes (hide: set to false).
			// Comment out what you want to see as the default is visible.
			// cubeNode.setVisible(false);
			cubeNode1.setVisible(false);
			cubeNode2.setVisible(false);
			cubeNode3.setVisible(false);
			cubeNode4.setVisible(false);
			cubeNode5.setVisible(false);
			cubeNode6.setVisible(false);
			insideOutPolyNode.setVisible(false);
			diamondNode.setVisible(false);
			torusNode.setVisible(false);
			torusNode1.setVisible(false);
			teapotNode.setVisible(false);
			dirtyTeapotNode.setVisible(false);
			waltheadNode.setVisible(false);
			plainNode1.setVisible(false);
			emptyNode1.setVisible(false);

			// Set the initially interactive node [by name].
			// If not set, it is the first node created.
			// scenegraph.setInteractiveNodeByName("mySphere");
			//scenegraph.setInteractiveNode(torusNode);
			// scenegraph.setInteractiveNodeByName("insideOutPoly");

			// Create a node for the light, which is not visible by default.
			var lightnode = scenegraph.createPointLightNode("light", "diamond");

			// Set light parameter.
			// ambientLI, pointLI, pointPos, specularLI, specularLIExpo
			// scenegraph.setLights(0.5, 0.6, [200, 200, 300], 4.0, 10);
		}

		// Public API.
		exports.init = init;
	});