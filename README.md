# the-story-flow-
this website helps write and keep track of your stories 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>StoryFlow</title>

  <link rel="stylesheet" href="style.css">
</head>

<body>

  <header>
    <h1>StoryFlow</h1>
    <p>Build stories from first principles.</p>
  </header>

  <main>

    <!-- STORY IDEA -->
    <section class="card">
      <h2>Story Premise</h2>

      <textarea id="premise" placeholder="Write your core idea..."></textarea>
    </section>

    <!-- CHARACTERS -->
    <section class="card">
      <h2>Main Character</h2>

      <input type="text" id="character" placeholder="Character name">

      <textarea id="goal" placeholder="What does the character want?"></textarea>
    </section>

    <!-- CONFLICT -->
    <section class="card">
      <h2>Conflict</h2>

      <textarea id="conflict" placeholder="What stands in their way?"></textarea>
    </section>

    <!-- STORY STRUCTURE -->
    <section class="card">
      <h2>3 Act Structure</h2>

      <textarea id="beginning" placeholder="Beginning"></textarea>

      <textarea id="middle" placeholder="Middle"></textarea>

      <textarea id="ending" placeholder="Ending"></textarea>
    </section>

    <!-- STORYBOARD -->
    <section class="card">
      <h2>Storyboard Scenes</h2>

      <textarea id="scene1" placeholder="Scene 1"></textarea>

      <textarea id="scene2" placeholder="Scene 2"></textarea>

      <textarea id="scene3" placeholder="Scene 3"></textarea>
    </section>

    <!-- BUTTON -->
    <section class="card">
      <button onclick="generateStory()">
        Generate Story Summary
      </button>
    </section>

    <!-- OUTPUT -->
    <section class="card output-card">
      <h2>Your Story</h2>

      <div id="output"></div>
    </section>

  </main>

  <script src="script.js"></script>

</body>
</html>
