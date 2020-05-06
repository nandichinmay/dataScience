    const callbacks = {
        onEpochEnd: async (epoch, logs) => {
          console.log("epoch: " + epoch + JSON.stringify(logs))
        }
      };

    // Generate some synthetic data for training.
    const xs = tf.tensor2d([[1], [2], [3], [4]], [4, 1]);
    const ys = tf.tensor2d([[1], [3], [5], [7]], [4, 1]);

    // Build and compile model.
    async function basicRegression(){

      // Build a sequential model
      const model = tf.sequential();
      model.add(tf.layers.dense({units: 1, inputShape: [1]}));
      model.add(tf.layers.dense({units: 1, inputShape: [1]}));
      model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});

      // Train model with fit().
      await model.fit(xs, ys, {epochs: 100, validationSplit: 0.1, callbacks: callbacks});

      // Run inference with predict().
      model.predict(tf.tensor2d([[5]], [1, 1])).print();
  }

  // Create a basic regression model
  basicRegression();