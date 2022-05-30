<template>
  <form action="/action_page.php">
    <label class="property" for="title">Title</label>
    <input type="text" id="title" name="title" value="Big Data"><br>

    <label>Credits</label>
    <input type="radio" id="credits1" name="credits" value="3">
    <label for="credits1">3 SP</label>
    <input type="radio" id="credits2" name="credits" value="6">
    <label for="credits2">6 SP</label><br>

    <label>Year</label>
    <input type="radio" id="year1" name="year" value="1">
    <label for="year1">First</label>
    <input type="radio" id="year2" name="year" value="2">
    <label for="year2">Second</label>
    <input type="radio" id="year3" name="year" value="3">
    <label for="year3">Third</label><br/>

    <label>Semester</label>
    <input type="radio" id="semester1" name="semester" value="1">
    <label for="semester1">First</label>
    <input type="radio" id="semester2" name="semester" value="2">
    <label for="semester2">Second</label><br/>


    <label>Docent</label>
    <select>
      <option>
        Leerkracht
      </option>
      <option>
        Docent
      </option>
    </select>


    <input type="submit" value="Submit">
  </form>
</template>