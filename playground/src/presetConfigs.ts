export interface NetworkPreset {
    layers: number[];
    activation: string;
    learningRate: number;
    regularization: string;
    regularizationRate: number;
    inputFeatures: string[];
    explanation: string;
  }

  // For each dataset available in the playground, create a network configuration so that a user
  // can autofill a correct network for each. The original playground has four datasets (gauss, circle
  // spiral, XOR), and I added an additional two datasets (checkerboard and moons). See explanation string
  // for each dataset for a brief idea of why the architecture is structured as it is. 
  export const datasetPresets: { [key: string]: NetworkPreset } = {
    checkerboard: {
      layers: [8, 8, 6],
      activation: "tanh",
      learningRate: 0.03,
      regularization: "L2",
      regularizationRate: 0.001,
      inputFeatures: ["x", "y", "sinX", "sinY"],
      explanation: "Checkerboard classification requires learning many sharp and alternating decision boundaries. This calls for a model that can capture a periodic, grid-like structure.\n" 
      + "To properly classify a dataset resembling a checkerboard, this neural network uses:\n"
      + "    * A multi-layer structure (8 → 8 → 6) to represent many square regions and utilize the periodic information from sin(x₁) and sin(x₂).\n"
      + "    * Tanh activation to give smooth decision boundaries.\n"
      + "    * L2 regularization to prevent overfitting without forcing sparsity (L1 would zero out useful features we selected).\n"
      + "    * sin(x₁) and sin(x₂) give a periodicly changing pattern in vertical & horizontal directions, which matches the oscillation pattern of a checkerboard!"
    },
    moons: {
      layers: [8, 6],
      activation: "tanh",
      learningRate: 0.03,
      regularization: "L2",
      regularizationRate: 0.001,
      inputFeatures: ["x", "y", "xSquared", "ySquared"],
      explanation: "This dataset mimics a target recognition task, as a crescent shaped moon appears at an arbitrary location in the canvas."
      + "Therefore, a model must learn to distinguish this target from a background of noise (negative points)."
      + "To detect the moon shape and regardless of its position, this network uses:\n"
      + "  * Two hidden layers (8 → 6) to learn curved, position-invariant patterns, necessary for fitting the crescent curves, in any location.\n"
      + "  * Tanh activation for smooth decision boundaries.\n"
      + "  * L2 regularization to prevent overfitting without forcing sparsity (L1 would zero out useful features we selected).\n"
      + "  * Features x, y, x², and y² to give both position and radial curvature, helping the model to find the crescent moon wherever it is."
    },
    gauss: {
        layers: [],
        activation: "relu",
        learningRate: 0.03,
        regularization: "L2",
        regularizationRate: 0.001,
        inputFeatures: ["x", "y"],
        explanation: "This dataset contains two linearly separable clusters, meaning we do not need a Neural Network"
        + "to classify it, and can do it with a simple line through the 2D space. To find this line, we only need to"
        + "utilize the x₁ and x₂ features, can apply ReLU for activation (sigmoid or tanh work as well), and L2 loss"
        + "for good practice. The main takeaway from this dataset is that for linearly separable data, we do not need"
        + "anything fancy, and a simple perceptron will do the trick!"
    },
    circle: {
        layers: [],
        activation: "relu",
        learningRate: 0.03,
        regularization: "L2",
        regularizationRate: 0.001,
        inputFeatures: ["xSquared", "ySquared"],
        explanation: "This dataset resembles a donut shape, as there is a clear inner and outer circle made up of different"
        + "classes (blue on the inside, orange on the outside). Although this dataset is not linearly separable in the 2D space"
        + "we see, we can project it to a higher feature space by using the quadratic features (x², y²). In doing this, we transform"
        + "the circular decision boundary into a linear one in that new feature space, allowing us to again not need any Neural Network"
        + "to properly classify this. This dataset shows the power of good feature selection, as a problem that initially does not seem"
        + "linearly separable becomes just that in the new feature space we design!"
    },
    xor: {
        layers: [],
        activation: "relu",
        learningRate: 0.03,
        regularization: "L2",
        regularizationRate: 0.001,
        inputFeatures: ["xTimesY"],
        explanation: "This dataset represents an XOR function, as one class is within the top right (x₁ and x₂ positive) and bottom left (x₁ and x₂ negative),"
        + "and the other class in the other two quadrants (one of x₁ and x₂ negative). Although this dataset is not linearly separable in the 2D space"
        + "we see, we can project it to a higher feature space by using feature that is the product of both axes, x₁ * x₂. In doing this, we transform"
        + "the non linear decision boundary into a linear one in that new feature space, allowing us to again not need any Neural Network"
        + "to properly classify this. This dataset shows the power of good feature selection, as a problem that initially does not seem"
        + "linearly separable becomes just that in the new feature space we design!"
    },
    spiral: {
        layers: [6, 4],
        activation: "tanh",
        learningRate: 0.03,
        regularization: "L2",
        regularizationRate: 0.001,
        inputFeatures: ["x", "y", "xSquared", "ySquared", "sinX", "sinY"],
        explanation: "This dataset contains intertwined class regions that necessitate a model to learn the interleaved spiral pattern both classes share, while differentiating them from each other."
        + "Both classes share the same pattern of spiraling outward from the origin and widening as they grow farther from the center."
        + "To classify the interwoven spiral patterns, this network uses:\n"
        + "  * Two hidden layers (6 → 4) to learn the curved patterns, necessary for fitting the continually rotating spiral shapes.\n"
        + "  * Tanh activation for smooth decision boundaries.\n"
        + "  * L2 regularization to prevent overfitting without forcing sparsity (L1 would zero out useful features we selected).\n"
        + "  * Features x, y, x², y², sin(x₁), and sin(x₂). sin(x₁) and sin(x₂) detect the periodic pattern in the spiral, whereas x² and y² detect the distance from the origin, as the spirals grow further away."
    },
  };
  