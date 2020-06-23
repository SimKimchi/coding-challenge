using Microsoft.AspNetCore.Mvc;
using Moq;
using NinjAPI.Controllers;
using NinjAPI.Models;
using NinjAPI.Services;
using NinjAPI.Validators;
using Xunit;

namespace NinjAPI.WebAPI.Tests
{
  public class NinjaControllerTst
  {
    private const string NINJA_NAME = "Sekiro";
    private const string BUZZWORDS = "Java";

    private readonly Mock<INinjaService> _ninjaService;
    private readonly Mock<IBuzzwordValidator> _buzzwordValidator;
    private readonly NinjaModel _ninja;

    private NinjifyController _controller;

    public NinjaControllerTst()
    {
      _ninja = new NinjaModel(NINJA_NAME);
      _ninjaService = new Mock<INinjaService>();
      _ninjaService.Setup(service => service.CreateNinja(It.IsAny<string>())).Returns(_ninja);
      _buzzwordValidator = new Mock<IBuzzwordValidator>();
    }

    [Fact]
    public void GetNinjaName_ValidBuzzwords_ShouldReturnNinja()
    {
      // Arrange
      var validBuzzwordResult = new ValidatorResult(true);

      _buzzwordValidator.Setup(validator => validator.Validate(It.IsAny<string>())).Returns(validBuzzwordResult);
      _controller = new NinjifyController(_ninjaService.Object, _buzzwordValidator.Object);

      // Act
      var result = _controller.GetNinjaName(BUZZWORDS);

      // Assert
      var okObjectResult = Assert.IsType<OkObjectResult>(result.Result);
      Assert.Equal(_ninja, okObjectResult.Value);
    }

    [Fact]
    public void GetNinjaName_InvalidBuzzwords_ShouldReturnError()
    {
      // Arrange
      var invalidBuzzwordResult = new ValidatorResult(false, "Error");

      _buzzwordValidator.Setup(validator => validator.Validate(It.IsAny<string>())).Returns(invalidBuzzwordResult);
      _controller = new NinjifyController(_ninjaService.Object, _buzzwordValidator.Object);

      // Act
      var result = _controller.GetNinjaName(BUZZWORDS);

      // Assert
      var badRequestObjectResult = Assert.IsType<BadRequestObjectResult>(result.Result);
      Assert.Equal(invalidBuzzwordResult, badRequestObjectResult.Value);
    }
  }
}
