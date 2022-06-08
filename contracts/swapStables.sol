// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IERC20 {
    event Approval(address indexed owner, address indexed spender, uint value);
    event Transfer(address indexed from, address indexed to, uint value);

    function name() external pure returns (string memory);
    function symbol() external pure returns (string memory);
    function decimals() external pure returns (uint8);
    function totalSupply() external view returns (uint);
    function balanceOf(address owner) external view returns (uint);
    function allowance(address owner, address spender) external view returns (uint);

    function approve(address spender, uint value) external returns (bool);
    function transfer(address to, uint value) external returns (bool);
    function transferFrom(address from, address to, uint value) external returns (bool);

    function DOMAIN_SEPARATOR() external view returns (bytes32);
    function PERMIT_TYPEHASH() external pure returns (bytes32);
    function nonces(address owner) external view returns (uint);

    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;
}
 

contract swapStables is Ownable {
    address public dai = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address public usdc = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
    uint256 public fee = 20; //0.2%
    uint private sum = 0;


    function changeFee(uint _fee) public onlyOwner {
        fee = _fee;
    }
    function supplyStables(uint amountOfUSDC, uint amountOfDai, uint deadline, uint8 v, bytes32 r, bytes32 s) public {
        require(amountOfDai <= IERC20(dai).balanceOf(msg.sender));
        require(amountOfUSDC <= IERC20(usdc).balanceOf(msg.sender));
        IERC20(dai).permit(msg.sender, address(this), amountOfDai, deadline, v, r, s);
        IERC20(usdc).permit(msg.sender, address(this), amountOfUSDC, deadline, v, r, s);
        IERC20(usdc).transferFrom(msg.sender, address(this), amountOfUSDC);
        IERC20(dai).transferFrom(msg.sender, address(this), amountOfDai);
    }

    function swapForUSDC(uint amount, uint deadline, uint8 v, bytes32 r, bytes32 s) public {
        require(amount > 0);
        uint256 _balanceOfUSDC = IERC20(usdc).balanceOf(address(this));
        uint256 balanceOfUSDC = _balanceOfUSDC/1000000000000000000;
        require(amount < balanceOfUSDC + 1);
        IERC20(dai).permit(msg.sender, address(this), amount, deadline, v, r, s);
        if(amount >  0)IERC20(dai).transferFrom(msg.sender, address(this), amount);
        sum = amount - (amount*fee / 10000);
        IERC20(usdc).transfer(msg.sender, sum);
        
    }
    function swapForDai(uint256 amount, uint deadline, uint8 v, bytes32 r, bytes32 s) public {
        IERC20(dai).permit(msg.sender, address(this), amount, deadline, v, r, s);
        IERC20(usdc).transferFrom(msg.sender, address(this), amount);
        sum = amount - (amount*fee / 10000);
        IERC20(dai).transfer(msg.sender, sum);
    }
    function withdrawAll() public onlyOwner {
        uint256 balance = IERC20(dai).balanceOf(address(this));
        uint256 balance1 = IERC20(usdc).balanceOf(address(this));
        IERC20(dai).transfer(msg.sender, balance);
        IERC20(usdc).transfer(msg.sender, balance1);
    }
}