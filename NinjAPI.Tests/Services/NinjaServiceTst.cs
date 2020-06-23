using Moq;
using NinjAPI.DAL;
using NinjAPI.Services;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace NinjAPI.WebAPI.Tests
{
  public class NinjaServiceTst
  {
    private readonly Mock<INinjaDA> _ninjaDA;
    private readonly List<string> ninjaNames = new List<string> { "1", "2", "3" };
    private readonly List<string> ninjaAdjectives = new List<string> { "a", "b", "c" };

    public NinjaServiceTst()
    {
      _ninjaDA = new Mock<INinjaDA>();
      _ninjaDA.Setup(service => service.GetNinjaAdjectives()).Returns(ninjaAdjectives);
      _ninjaDA.Setup(service => service.GetNinjaNames()).Returns(ninjaNames);
    }

    [Fact]
    public void CreateNinja_OneWord_ShouldReturnsOneName()
    {
      // Arrange
      var buzzwords = "java";
      var ninjaDA = new NinjaService(_ninjaDA.Object);

      // Act
      var result = ninjaDA.CreateNinja(buzzwords);
      var nameWords = result.Name.Split(' ').ToArray();

      // Assert
      Assert.NotNull(result.Name);
      Assert.Single(nameWords);
      Assert.Equal(ninjaNames[1], nameWords[0]);
    }

    [Fact]
    public void CreateNinja_TwoWords_ShouldReturnsOneAdjectiveOneName()
    {
      // Arrange
      var buzzwords = "java,python";
      var ninjaDA = new NinjaService(_ninjaDA.Object);

      // Act
      var result = ninjaDA.CreateNinja(buzzwords);
      var nameWords = result.Name.Split(' ').ToArray();

      // Assert
      Assert.NotNull(result.Name);
      Assert.Equal(2, nameWords.Count());
      Assert.Equal(ninjaAdjectives[1], nameWords[0]);
      Assert.Equal(ninjaNames[2], nameWords[1]);
    }

    [Fact]
    public void CreateNinja_ThreeWords_ShouldReturnsTwoAdjectivesOneName()
    {
      // Arrange
      var buzzwords = "java,python,html";
      var ninjaDA = new NinjaService(_ninjaDA.Object);

      // Act
      var result = ninjaDA.CreateNinja(buzzwords);
      var nameWords = result.Name.Split(' ').ToArray();

      // Assert
      Assert.NotNull(result.Name);
      Assert.Equal(3, nameWords.Count());
      Assert.Equal(ninjaAdjectives[1], nameWords[0]);
      Assert.Equal(ninjaAdjectives[2], nameWords[1]);
      Assert.Equal(ninjaNames[2], nameWords[2]);
    }
  }
}
