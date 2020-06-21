using Moq;
using NinjAPI.DAL;
using NinjAPI.Validators;
using System.Collections.Generic;
using Xunit;

namespace NinjAPI.WebAPI.Tests
{
    public class BuzzwordValidatorTst
    {
        private const string NULL_OR_EMPTY_ERROR = "You did not enter anything!";
        private const string CONTAINS_NUMBERS_ERROR = "Do not enter numbers!";
        private const string NOT_FROM_AWESOME_LIST_ERROR = "Only enter buzzwords from the awesome list!";

        private readonly Mock<INinjaDA> _ninjaDA;
        private readonly List<string> awesomeList = new List<string> { "java", "python", "html" };

        public BuzzwordValidatorTst()
        {
            _ninjaDA = new Mock<INinjaDA>();
            _ninjaDA.Setup(service => service.GetAwesomeList()).Returns(awesomeList);
        }

        [Fact]
        public void Validate_Empty_ShouldReturnNullOrEmptyError()
        {
            // Arrange
            var buzzwords = "";
            var buzzwordValidator = new BuzzwordValidator(_ninjaDA.Object);

            // Act
            var result = buzzwordValidator.Validate(buzzwords);

            // Assert
            Assert.NotNull(result);
            Assert.False(result.isValid);
            Assert.Equal(NULL_OR_EMPTY_ERROR, result.errorMessage);
        }

        [Fact]
        public void Validate_Null_ShouldReturnNullOrEmptyError()
        {
            // Arrange
            string buzzwords = null;
            var buzzwordValidator = new BuzzwordValidator(_ninjaDA.Object);

            // Act
            var result = buzzwordValidator.Validate(buzzwords);

            // Assert
            Assert.NotNull(result);
            Assert.False(result.isValid);
            Assert.Equal(NULL_OR_EMPTY_ERROR, result.errorMessage);
        }

        [Fact]
        public void Validate_ContainsNumbers_ShouldReturnContainsNumbersError()
        {
            // Arrange
            string buzzwords = "java1";
            var buzzwordValidator = new BuzzwordValidator(_ninjaDA.Object);

            // Act
            var result = buzzwordValidator.Validate(buzzwords);

            // Assert
            Assert.NotNull(result);
            Assert.False(result.isValid);
            Assert.Equal(CONTAINS_NUMBERS_ERROR, result.errorMessage);
        }

        [Fact]
        public void Validate_NotFromAwesomeList_ShouldReturnNotFromAwesomeListError()
        {
            // Arrange
            string buzzwords = "snake";
            var buzzwordValidator = new BuzzwordValidator(_ninjaDA.Object);

            // Act
            var result = buzzwordValidator.Validate(buzzwords);

            // Assert
            Assert.NotNull(result);
            Assert.False(result.isValid);
            Assert.Equal(NOT_FROM_AWESOME_LIST_ERROR, result.errorMessage);
        }

        [Fact]
        public void Validate_SecondWordNotFromAwesomeList_ShouldReturnNotFromAwesomeListError()
        {
            // Arrange
            string buzzwords = "python,apple";
            var buzzwordValidator = new BuzzwordValidator(_ninjaDA.Object);

            // Act
            var result = buzzwordValidator.Validate(buzzwords);

            // Assert
            Assert.NotNull(result);
            Assert.False(result.isValid);
            Assert.Equal(NOT_FROM_AWESOME_LIST_ERROR, result.errorMessage);
        }

        [Fact]
        public void Validate_OneValidWord_ShouldReturnValidResult()
        {
            // Arrange
            string buzzwords = "java";
            var buzzwordValidator = new BuzzwordValidator(_ninjaDA.Object);

            // Act
            var result = buzzwordValidator.Validate(buzzwords);

            // Assert
            Assert.NotNull(result);
            Assert.True(result.isValid);
            Assert.Null(result.errorMessage);
        }

        [Fact]
        public void Validate_TwoValidWords_ShouldReturnValidResult()
        {
            // Arrange
            string buzzwords = "java,html";
            var buzzwordValidator = new BuzzwordValidator(_ninjaDA.Object);

            // Act
            var result = buzzwordValidator.Validate(buzzwords);

            // Assert
            Assert.NotNull(result);
            Assert.True(result.isValid);
            Assert.Null(result.errorMessage);
        }
    }
}
