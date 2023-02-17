function alertNameAndCheckBoxCount() {
    const userName = document.getElementById('name').value;

    const judgeCheckBoxQuery = 'input[name="userMovie"]:checked';
    const checkBoxes = document.querySelectorAll(judgeCheckBoxQuery);

    // 선택된 목록의 갯수 세기
    const checkBoxCount = checkBoxes.length;
    alert(userName + "님, 저와 " + checkBoxCount + "개의 취향이 같으시네요!");
}