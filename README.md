# Modified TensorFlow Neural Network Playground

This project is a modified version of the [TensorFlow Neural Network Playground](https://github.com/tensorflow/playground), an interactive visualization of neural networks built using TensorFlow.js and D3.js.

## 🔧 Modifications Made

The following changes have been made to the original playground:

- Added new synthetic datasets: `checkerboard`, `moons` (changes inside of dataset.ts)
- Implemented autofill feature that suggests neural network configurations based on the selected dataset (changes in presetConfigs.ts, playground.ts)
- Added popup explanation when autofilling a dataset to improve user understanding (changes in presetConfigs.ts, playground.ts)
- UI adjustments for new datasets and autofill button (changes in playground.ts)

> These modifications were made for academic and educational purposes, as part of a course project.

## 📜 License

This project is based on [TensorFlow Playground](https://github.com/tensorflow/playground), which is licensed under the [Apache License 2.0](./LICENSE).

Per the license:

> This project includes contributions licensed under the Apache License, Version 2.0. You may not use this file except in compliance with the License.  
> You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0

## 🙋‍♂️ Acknowledgements

Special thanks to the TensorFlow team for creating the original playground, which remains an excellent educational tool for understanding neural networks.
