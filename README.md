# Flappy ai

I completed a project recently that was a simple game using p5 and es6. now I want to take that to the next level. I am building a p5 recreation of flappy bird, and then I am going to build a neural network in javascript that will learn how to play it overt time. Although the hyperparameters will require some guess an check, it should only require a single layer.

The ai will take in two inputs: the x coordinate for the current gap, and the distance the bird is from the gap. It will use those features to produce a single output node for binary classification. any result above .5 will result in a flap. I'm sure this project will prove to be much more complicated that it sounds now, but I hope to lean on similar projects that have been done in the past.
