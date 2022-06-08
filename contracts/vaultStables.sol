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
 

contract vaultStables is Ownable {
    address public dai = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address public usdc = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
    uint256 public rates = 200; //2% apr
    uint private sum = 0;
    mapping(address=>uint256) private stakesDai;


    function changeRates(uint _rates) public onlyOwner {
        rates = _rates;
    }
    function supplyDai(uint amountOfDai) public {
        require(amountOfDai <= IERC20(dai).balanceOf(msg.sender));
        IERC20(dai).transferFrom(msg.sender, address(this), amountOfDai);
        amountOfDai = amountOfDai/1000000000000000000;
        stakesDai[msg.sender] = amountOfDai;
    }
    function withdrawSuppliedDai(uint amountOfDaiToWithdraw) public {
        uint amountOfDai = amountOfDaiToWithdraw/1000000000000000000;
        IERC20(dai).transfer(msg.sender, amountOfDaiToWithdraw);
        stakesDai[msg.sender] = stakesDai[msg.sender] - amountOfDai;
    }
    function BalanceOfStakedDai(address account) public view returns (uint256) {
        return stakesDai[account];
    }

    function withdrawAll() public onlyOwner {
        uint256 balance = IERC20(dai).balanceOf(address(this));
        IERC20(dai).transfer(msg.sender, balance);
    }
}