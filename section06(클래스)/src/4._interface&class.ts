/**
 * 인터페이스와 클래스
 */
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// 여기서 인터페이스는 클래스의 설계도 역할을 한다.
class Character implements CharacterInterface {
  // 인터페이스의 프로퍼티는 항상 public이어야 한다.
  constructor(
    public name: string,
    public moveSpeed: number,
  ) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }

  move(): void {
    console.log(`${this.moveSpeed}로 이동중`);
  }
}
