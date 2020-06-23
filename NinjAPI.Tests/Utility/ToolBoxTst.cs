using NinjAPI.Utility;
using System.Collections.Generic;
using Xunit;

namespace NinjAPI.WebAPI.Tests
{
  public class ToolBoxTst
  {
    [Fact]
    public void CreateWordList_OneWordCapitalized_ShouldReturnLowerCaseWord()
    {
      // Arrange
      var buzzwords = "CSS";
      var expectedList = new List<string>
            {
                "css"
            };

      // Act
      var result = ToolBox.CreateWordList(buzzwords);

      // Assert
      Assert.NotNull(result);
      Assert.Equal(expectedList, result);
    }

    [Fact]
    public void CreateWordList_TwoWords_ShouldReturnTwoItemList()
    {
      // Arrange
      var buzzwords = "css,java";
      var expectedList = new List<string>
            {
                "css",
                "java"
            };

      // Act
      var result = ToolBox.CreateWordList(buzzwords);

      // Assert
      Assert.NotNull(result);
      Assert.Equal(expectedList, result);
    }

    [Fact]
    public void CreateWordList_WordWithSpace_ShouldReturnWordWithoutSpace()
    {
      // Arrange
      var buzzwords = "cs s";
      var expectedList = new List<string>
            {
                "css"
            };

      // Act
      var result = ToolBox.CreateWordList(buzzwords);

      // Assert
      Assert.NotNull(result);
      Assert.Equal(expectedList, result);
    }

    [Fact]
    public void CreateWordList_WordWithDash_ShouldReturnWordWithoutDash()
    {
      // Arrange
      var buzzwords = "cs-s";
      var expectedList = new List<string>
            {
                "css"
            };

      // Act
      var result = ToolBox.CreateWordList(buzzwords);

      // Assert
      Assert.NotNull(result);
      Assert.Equal(expectedList, result);
    }

    [Fact]
    public void CreateWordList_WordWithPeriod_ShouldReturnWordWithoutPeriod()
    {
      // Arrange
      var buzzwords = "cs.s";
      var expectedList = new List<string>
            {
                "css"
            };

      // Act
      var result = ToolBox.CreateWordList(buzzwords);

      // Assert
      Assert.NotNull(result);
      Assert.Equal(expectedList, result);
    }

    [Fact]
    public void CreateWordList_WordWithPlus_ShouldReturnWordWithoutPlus()
    {
      // Arrange
      var buzzwords = "cs+s";
      var expectedList = new List<string>
            {
                "css"
            };

      // Act
      var result = ToolBox.CreateWordList(buzzwords);

      // Assert
      Assert.NotNull(result);
      Assert.Equal(expectedList, result);
    }

    [Fact]
    public void CreateWordList_WordWithHash_ShouldReturnWordWithoutHash()
    {
      // Arrange
      var buzzwords = "cs#s";
      var expectedList = new List<string>
            {
                "css"
            };

      // Act
      var result = ToolBox.CreateWordList(buzzwords);

      // Assert
      Assert.NotNull(result);
      Assert.Equal(expectedList, result);
    }

    [Fact]
    public void CreateWordList_WordWithSlash_ShouldReturnWordWithoutSlash()
    {
      // Arrange
      var buzzwords = "cs/s";
      var expectedList = new List<string>
            {
                "css"
            };

      // Act
      var result = ToolBox.CreateWordList(buzzwords);

      // Assert
      Assert.NotNull(result);
      Assert.Equal(expectedList, result);
    }

    [Fact]
    public void CreateWordList_WordWithUnderscore_ShouldReturnWordWithoutUnderscore()
    {
      // Arrange
      var buzzwords = "cs_s";
      var expectedList = new List<string>
            {
                "css"
            };

      // Act
      var result = ToolBox.CreateWordList(buzzwords);

      // Assert
      Assert.NotNull(result);
      Assert.Equal(expectedList, result);
    }
  }
}
