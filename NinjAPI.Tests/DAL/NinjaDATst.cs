using NinjAPI.DAL;
using Xunit;

namespace NinjAPI.WebAPI.Tests
{
    public class NinjaDATst
    {
        [Fact]
        public void GetNinjaAdjectives_ListShouldHaveItems()
        {
            // Arrange
            var ninjaDA = new NinjaDA();

            // Act
            var result = ninjaDA.GetNinjaAdjectives();

            // Assert
            Assert.NotNull(result);
            Assert.NotEmpty(result);
        }

        [Fact]
        public void GetNinjaNames_ListShouldHaveItems()
        {
            // Arrange
            var ninjaDA = new NinjaDA();

            // Act
            var result = ninjaDA.GetNinjaNames();

            // Assert
            Assert.NotNull(result);
            Assert.NotEmpty(result);
        }

        [Fact]
        public void GetAwesomeList_ListShouldHaveItems()
        {
            // Arrange
            var ninjaDA = new NinjaDA();

            // Act
            var result = ninjaDA.GetAwesomeList();

            // Assert
            Assert.NotNull(result);
            Assert.NotEmpty(result);
        }
    }
}
